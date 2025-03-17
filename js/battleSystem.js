// Battle system functionality

// Check for possible evolutions
function checkEvolutions() {
    // Check bench for three identical Pokemon
    const pokemonCounts = {};
    
    // Count Pokemon by name on bench
    gameState.bench.forEach(pokemon => {
        if (pokemon) {
            if (!pokemonCounts[pokemon.name]) {
                pokemonCounts[pokemon.name] = [];
            }
            pokemonCounts[pokemon.name].push(pokemon);
        }
    });
    
    // Check for three identical Pokemon
    for (const [name, pokemons] of Object.entries(pokemonCounts)) {
        if (pokemons.length >= 3 && pokemonData[name].evolution) {
            // Get the evolution Pokemon
            const evolutionName = pokemonData[name].evolution;
            const evolvedPokemon = { 
                ...pokemonData[evolutionName], 
                id: generateUniqueId() 
            };
            
            // Remove three base Pokemon
            let removedCount = 0;
            for (let i = 0; i < gameState.bench.length; i++) {
                if (gameState.bench[i] && gameState.bench[i].name === name && removedCount < 3) {
                    // Store the first Pokemon for animation
                    if (removedCount === 0) {
                        showEvolutionAnimation(gameState.bench[i], evolvedPokemon);
                    }
                    gameState.bench[i] = null;
                    removedCount++;
                }
            }
            
            // Add evolved Pokemon to first empty bench slot
            const emptySlot = gameState.bench.findIndex(slot => slot === null);
            if (emptySlot !== -1) {
                gameState.bench[emptySlot] = evolvedPokemon;
            }
            
            renderBench();
            break; // Only handle one evolution at a time
        }
    }
}

// Start a battle
function startBattle() {
    if (gameState.inBattle) return;
    
    gameState.inBattle = true;
    startBattleButton.disabled = true;
    refreshShopButton.disabled = true;
    buyExpButton.disabled = true;
    
    // Generate enemy board based on player level
    generateEnemyBoard();
    
    // Setup battle units
    setupBattleUnits();
    
    // Start battle simulation
    simulateBattle();
}

// Generate enemy board based on player level and current stage
function generateEnemyBoard() {
    gameState.enemyBoard = [];
    
    // Number of enemy units based on player level and stage
    const stageBonus = Math.floor(gameState.stage / 2);
    const enemyUnitCount = Math.min(gameState.level + stageBonus + 2, 8);
    
    // Possible Pokemon types for enemies - scale with stage
    const maxEnemyLevel = Math.ceil(gameState.level / 3) + Math.floor(gameState.stage / 2);
    const possibleEnemies = Object.keys(pokemonData).filter(name => {
        return pokemonData[name].level <= maxEnemyLevel;
    });
    
    // Generate random enemy units and distribute them in the enemy area (rows 0-2)
    for (let i = 0; i < enemyUnitCount; i++) {
        const randomPokemon = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
        
        // Distribute enemies across the enemy area (rows 0-2)
        const row = Math.floor(i / 3);
        const col = i % 8;
        
        // Scale enemy stats based on stage
        const statMultiplier = 1 + (gameState.stage * 0.1) + ((gameState.round - 1) * 0.05);
        const baseStats = pokemonData[randomPokemon].stats;
        
        const enemyUnit = { 
            ...pokemonData[randomPokemon],
            id: generateUniqueId(),
            stats: {
                physicalAttack: Math.floor(baseStats.physicalAttack * statMultiplier),
                physicalDefense: Math.floor(baseStats.physicalDefense * statMultiplier),
                specialAttack: Math.floor(baseStats.specialAttack * statMultiplier),
                specialDefense: Math.floor(baseStats.specialDefense * statMultiplier),
                health: Math.floor(baseStats.health * statMultiplier),
                speed: Math.floor(baseStats.speed * statMultiplier),
                range: baseStats.range
            },
            currentHealth: Math.floor(baseStats.health * statMultiplier),
            position: { row: row, col: col },
            isEnemy: true
        };
        
        gameState.enemyBoard.push(enemyUnit);
    }
}

// Setup battle units
function setupBattleUnits() {
    gameState.battleUnits = [];
    
    // Add player units
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            if (gameState.board[row][col]) {
                const unit = { 
                    ...gameState.board[row][col],
                    currentHealth: gameState.board[row][col].stats.health,
                    position: { row, col },
                    isEnemy: false
                };
                gameState.battleUnits.push(unit);
            }
        }
    }
    
    // Add enemy units
    gameState.battleUnits = [...gameState.battleUnits, ...gameState.enemyBoard];
    
    // Render battle units
    renderBattleUnits();
}

// Render battle units
function renderBattleUnits() {
    // Clear battle board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.innerHTML = '');
    
    // Render each unit
    gameState.battleUnits.forEach(unit => {
        if (unit.currentHealth > 0) {
            const cell = document.querySelector(`.cell[data-position="${unit.position.row}-${unit.position.col}"]`);
            if (cell) {
                const unitElement = createPokemonElement(unit);
                
                // Add enemy indicator
                if (unit.isEnemy) {
                    unitElement.classList.add('enemy');
                }
                
                // Update health bar
                const healthPercent = (unit.currentHealth / unit.stats.health) * 100;
                const healthBar = unitElement.querySelector('.health-bar-fill');
                healthBar.style.width = `${healthPercent}%`;
                
                cell.appendChild(unitElement);
            }
        }
    });
}

// Simulate battle
function simulateBattle() {
    let battleRound = 0;
    const maxRounds = 30; // Prevent infinite battles
    
    const battleInterval = setInterval(() => {
        battleRound++;
        
        // Process attacks for each unit
        gameState.battleUnits.forEach(unit => {
            if (unit.currentHealth <= 0) return; // Skip dead units
            
            // Find target
            const target = findTarget(unit);
            if (target) {
                // Randomly select a move from the unit's move list
                let move;
                if (unit.moves && unit.moves.length > 0) {
                    // Randomly select a move from available moves
                    const moveIndex = Math.floor(Math.random() * unit.moves.length);
                    move = unit.moves[moveIndex];
                } else {
                    // Fallback to default move if no moves available
                    move = {
                        name: 'Tackle',
                        type: 'normal',
                        damage_category: 'Physical',
                        power: 40,
                        accuracy: 100
                    };
                }
                
                // Calculate type effectiveness
                const typeEffectiveness = calculateTypeEffectiveness(move.type, target.type);
                
                // Check for critical hit
                const critical = isCriticalHit(unit);
                
                // Calculate damage using the formula
                const damage = calculateDamage(unit, target, move, critical, typeEffectiveness);
                target.currentHealth -= damage;
                
                // Attack animation with move, critical status, damage, and type effectiveness
                animateAttack(unit, target, move, critical, damage, typeEffectiveness);
                
                // Check if target died
                if (target.currentHealth <= 0) {
                    target.currentHealth = 0;
                }
            }
        });
        
        // Remove dead units
        gameState.battleUnits = gameState.battleUnits.filter(unit => unit.currentHealth > 0);
        
        // Render updated battle state
        renderBattleUnits();
        
        // Check battle end conditions
        const playerUnits = gameState.battleUnits.filter(unit => !unit.isEnemy);
        const enemyUnits = gameState.battleUnits.filter(unit => unit.isEnemy);
        
        if (playerUnits.length === 0 || enemyUnits.length === 0 || battleRound >= maxRounds) {
            clearInterval(battleInterval);
            endBattle(playerUnits.length > 0 && enemyUnits.length === 0);
        }
    }, 1000); // 1 second per round
}

// Find a target for a unit to attack
function findTarget(unit) {
    // Get all enemy units
    const enemies = gameState.battleUnits.filter(enemy => 
        enemy.isEnemy !== unit.isEnemy && enemy.currentHealth > 0
    );
    
    if (enemies.length === 0) return null;
    
    // Find enemies in range
    const inRangeEnemies = enemies.filter(enemy => {
        const distance = Math.abs(enemy.position.row - unit.position.row) + 
                        Math.abs(enemy.position.col - unit.position.col);
        return distance <= unit.stats.range;
    });
    
    // If enemies in range, attack the one with lowest health
    if (inRangeEnemies.length > 0) {
        return inRangeEnemies.sort((a, b) => a.currentHealth - b.currentHealth)[0];
    }
    
    // If no enemies in range, return the closest one
    return enemies.sort((a, b) => {
        const distanceA = Math.abs(a.position.row - unit.position.row) + 
                        Math.abs(a.position.col - unit.position.col);
        const distanceB = Math.abs(b.position.row - unit.position.row) + 
                        Math.abs(b.position.col - unit.position.col);
        return distanceA - distanceB;
    })[0];
}

// Animate attack
function animateAttack(attacker, target, move, isCritical, damage, typeEffectiveness) {
    // Get DOM elements
    const attackerCell = document.querySelector(`.cell[data-position="${attacker.position.row}-${attacker.position.col}"]`);
    const targetCell = document.querySelector(`.cell[data-position="${target.position.row}-${target.position.col}"]`);
    
    if (attackerCell && targetCell) {
        // Create attack animation element
        const attackAnimation = document.createElement('div');
        attackAnimation.className = `attack-animation type-${move.type}`;
        
        // Position the animation
        document.body.appendChild(attackAnimation);
        
        // Get positions for animation
        const attackerRect = attackerCell.getBoundingClientRect();
        const targetRect = targetCell.getBoundingClientRect();
        
        // Set start position
        attackAnimation.style.left = `${attackerRect.left + attackerRect.width/2}px`;
        attackAnimation.style.top = `${attackerRect.top + attackerRect.height/2}px`;
        
        // Show move name
        const moveNameElement = document.createElement('div');
        moveNameElement.className = 'battle-move-name';
        moveNameElement.textContent = move.name;
        moveNameElement.style.left = `${attackerRect.left + attackerRect.width/2}px`;
        moveNameElement.style.top = `${attackerRect.top - 20}px`;
        document.body.appendChild(moveNameElement);
        
        // Animate to target
        setTimeout(() => {
            attackAnimation.style.left = `${targetRect.left + targetRect.width/2}px`;
            attackAnimation.style.top = `${targetRect.top + targetRect.height/2}px`;
            
            // Add hit effect
            setTimeout(() => {
                // Create hit effect
                const hitEffect = document.createElement('div');
                hitEffect.className = 'hit-effect';
                targetCell.appendChild(hitEffect);
                
                // Show damage number with color based on effectiveness and critical
                const damageElement = document.createElement('div');
                damageElement.className = 'damage-number';
                
                // Add effectiveness class
                if (typeEffectiveness > 1) {
                    damageElement.classList.add('damage-effective');
                    damageElement.textContent = `${damage} Super effective!`;
                } else if (typeEffectiveness < 1 && typeEffectiveness > 0) {
                    damageElement.classList.add('damage-not-effective');
                    damageElement.textContent = `${damage} Not very effective...`;
                } else if (typeEffectiveness === 0) {
                    damageElement.classList.add('damage-not-effective');
                    damageElement.textContent = `${damage} No effect...`;
                } else {
                    damageElement.classList.add('damage-normal');
                    damageElement.textContent = damage;
                }
                
                // Add critical class
                if (isCritical) {
                    damageElement.classList.add('damage-critical');
                }
                
                damageElement.style.left = `${targetRect.left + targetRect.width/2}px`;
                damageElement.style.top = `${targetRect.top}px`;
                document.body.appendChild(damageElement);
                
                // Show critical hit text if critical
                if (isCritical) {
                    const criticalElement = document.createElement('div');
                    criticalElement.className = 'critical-hit';
                    criticalElement.textContent = 'CRITICAL!';
                    criticalElement.style.left = `${targetRect.left + targetRect.width/2}px`;
                    criticalElement.style.top = `${targetRect.top - 20}px`;
                    document.body.appendChild(criticalElement);
                    
                    // Remove critical text after animation
                    setTimeout(() => {
                        criticalElement.remove();
                    }, 1000);
                }
                
                // Remove hit effect after animation
                setTimeout(() => {
                    hitEffect.remove();
                    damageElement.remove();
                }, 1000);
                
                // Remove attack animation and move name
                attackAnimation.remove();
                moveNameElement.remove();
            }, 300);
        }, 50);
    }
}

// End battle and process results
function endBattle(playerWon) {
    gameState.inBattle = false;
    startBattleButton.disabled = false;
    refreshShopButton.disabled = false;
    buyExpButton.disabled = false;
    
    // Process battle results
    if (playerWon) {
        // Player won - give rewards
        const stageBonus = Math.floor(gameState.stage / 2);
        const goldReward = 5 + gameState.level + stageBonus;
        gameState.gold += goldReward;
        
        // Progress to next round or stage
        progressStage();
        
        // Show victory message
        showBattleResult(`Victory! You earned ${goldReward} gold. Stage ${gameState.stage}, Round ${gameState.round}/${gameState.maxRounds}`);
    } else {
        // Player lost - take damage
        const stageDamageBonus = Math.floor(gameState.stage / 2);
        const damage = Math.min(gameState.level + stageDamageBonus + 2, 15);
        gameState.health -= damage;
        
        // Show defeat message
        showBattleResult(`Defeat! You lost ${damage} health. Try again!`);
        
        // Check game over
        if (gameState.health <= 0) {
            gameOver();
        }
    }
    
    // Check for victory condition (completed all stages with more than 50 health)
    if (gameState.stage > 7 && gameState.health > 50) {
        showVictory();
        return;
    }
    
    // Reset board to pre-battle state
    renderBoard();
    updateStats();
}