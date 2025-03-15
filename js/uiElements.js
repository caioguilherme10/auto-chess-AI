// UI elements and rendering functions

// Create a Pokemon element
function createPokemonElement(pokemon) {
    const element = document.createElement('div');
    element.className = 'pokemon';
    element.dataset.id = pokemon.id;
    
    // Add type indicator
    const typeIndicator = document.createElement('div');
    if (Array.isArray(pokemon.type)) {
        // Handle dual typing
        typeIndicator.className = `type-indicator type-${pokemon.type[0]}`;
        
        // Add secondary type indicator if it exists
        const secondaryTypeIndicator = document.createElement('div');
        secondaryTypeIndicator.className = `type-indicator type-${pokemon.type[1]}`;
        element.appendChild(secondaryTypeIndicator);
    } else {
        // Handle single typing
        typeIndicator.className = `type-indicator type-${pokemon.type}`;
    }
    element.appendChild(typeIndicator);
    
    // Add Pokemon image
    const img = document.createElement('img');
    img.src = pokemon.image.front;
    img.alt = pokemon.name;
    element.appendChild(img);
    
    // Add Pokemon name
    const nameElement = document.createElement('div');
    nameElement.className = 'pokemon-name';
    nameElement.textContent = pokemon.name;
    element.appendChild(nameElement);
    
    // Add level indicator if not in shop
    if (pokemon.level > 1) {
        const levelElement = document.createElement('div');
        levelElement.className = 'pokemon-level';
        levelElement.textContent = '★'.repeat(pokemon.level);
        element.appendChild(levelElement);
    }
    
    // Add health bar for battle
    const healthBar = document.createElement('div');
    healthBar.className = 'health-bar';
    const healthFill = document.createElement('div');
    healthFill.className = 'health-bar-fill';
    healthBar.appendChild(healthFill);
    element.appendChild(healthBar);
    
    return element;
}

// Render the bench
function renderBench() {
    const benchSlots = document.querySelectorAll('.bench-slot');
    
    benchSlots.forEach((slot, index) => {
        slot.innerHTML = '';
        
        if (gameState.bench[index]) {
            const pokemon = gameState.bench[index];
            const pokemonElement = createPokemonElement(pokemon);
            slot.appendChild(pokemonElement);
        }
    });
}

// Render the battle board
function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.innerHTML = '';
        
        const [row, col] = cell.dataset.position.split('-').map(Number);
        const pokemon = gameState.board[row][col];
        
        if (pokemon) {
            const pokemonElement = createPokemonElement(pokemon);
            cell.appendChild(pokemonElement);
        }
    });
}

// Select a Pokemon to display its info
function selectPokemon(element) {
    const pokemonId = element.dataset.id;
    let pokemon;
    
    // Find the Pokemon in bench, board, or shop
    for (let i = 0; i < gameState.bench.length; i++) {
        if (gameState.bench[i] && gameState.bench[i].id === pokemonId) {
            pokemon = gameState.bench[i];
            break;
        }
    }
    
    if (!pokemon) {
        for (let row = 0; row < gameState.board.length; row++) {
            for (let col = 0; col < gameState.board[row].length; col++) {
                if (gameState.board[row][col] && gameState.board[row][col].id === pokemonId) {
                    pokemon = gameState.board[row][col];
                    break;
                }
            }
            if (pokemon) break;
        }
    }
    
    if (!pokemon) {
        for (let i = 0; i < gameState.shop.length; i++) {
            if (gameState.shop[i] && gameState.shop[i].id === pokemonId) {
                pokemon = gameState.shop[i];
                break;
            }
        }
    }
    
    if (pokemon) {
        gameState.selectedPokemon = pokemon;
        displayPokemonInfo(pokemon);
    }
}

// Deselect the current Pokemon
function deselectPokemon() {
    gameState.selectedPokemon = null;
    pokemonInfo.innerHTML = '';
}

// Display Pokemon information
function displayPokemonInfo(pokemon) {
    // Format type display for single or dual typing
    let typeDisplay = '';
    let typeClasses = '';
    
    if (Array.isArray(pokemon.type)) {
        // Create type pills for each type
        typeDisplay = `
            <span class="type-pill ${pokemon.type[0].toLowerCase()}-type">${pokemon.type[0]}</span>
            <span class="type-pill ${pokemon.type[1].toLowerCase()}-type">${pokemon.type[1]}</span>
        `;
    } else {
        typeDisplay = `<span class="type-pill ${pokemon.type.toLowerCase()}-type">${pokemon.type}</span>`;
    }
    
    // Start with basic Pokemon info with improved header
    let infoHTML = `
        <div class="pokemon-info-header">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-level-indicator">${'★'.repeat(pokemon.level)}</div>
        </div>
        
        <div class="info-content">
            <div class="info-section">
                <div class="pokemon-types">
                    ${typeDisplay}
                </div>
                ${pokemon.evolution ? `
                <div class="evolution-info">
                    <span class="evolution-label">Evolves to:</span>
                    <span class="evolution-name">${pokemon.evolution}</span>
                </div>` : ''}
            </div>
            
            <div class="info-section">
                <h4 class="section-title">Stats</h4>
                <div class="stats-grid">
                    <div class="stat"><span class="stat-label">HP:</span> <span class="stat-value">${pokemon.stats.health}</span></div>
                    <div class="stat"><span class="stat-label">Attack:</span> <span class="stat-value">${pokemon.stats.attack}</span></div>
                    <div class="stat"><span class="stat-label">Range:</span> <span class="stat-value">${pokemon.stats.range}</span></div>
                    ${pokemon.stats.physicalAttack ? `<div class="stat"><span class="stat-label">Physical Atk:</span> <span class="stat-value">${pokemon.stats.physicalAttack}</span></div>` : ''}
                    ${pokemon.stats.physicalDefense ? `<div class="stat"><span class="stat-label">Physical Def:</span> <span class="stat-value">${pokemon.stats.physicalDefense}</span></div>` : ''}
                    ${pokemon.stats.specialAttack ? `<div class="stat"><span class="stat-label">Special Atk:</span> <span class="stat-value">${pokemon.stats.specialAttack}</span></div>` : ''}
                    ${pokemon.stats.specialDefense ? `<div class="stat"><span class="stat-label">Special Def:</span> <span class="stat-value">${pokemon.stats.specialDefense}</span></div>` : ''}
                    ${pokemon.stats.speed ? `<div class="stat"><span class="stat-label">Speed:</span> <span class="stat-value">${pokemon.stats.speed}</span></div>` : ''}
                </div>
            </div>
    `;
    
    // Add type effectiveness section if available
    if (pokemon.typeEffectiveness) {
        infoHTML += `
            <div class="info-section">
                <h4 class="section-title">Type Effectiveness</h4>
                <div class="type-effectiveness">
        `;
        
        // Create type effectiveness pills with color coding
        // Add super weaknesses (2x damage) with red background
        if (pokemon.typeEffectiveness.superWeak && pokemon.typeEffectiveness.superWeak.length > 0) {
            infoHTML += `
                <div class="effectiveness-group">
                    <div class="effectiveness-label super-weak">Super Weak (4x):</div>
                    <div class="effectiveness-types">
                        ${pokemon.typeEffectiveness.superWeak.map(type => 
                            `<span class="type-pill ${type.toLowerCase()}-type">${type}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add weaknesses (1.5x damage) with orange background
        if (pokemon.typeEffectiveness.weak && pokemon.typeEffectiveness.weak.length > 0) {
            infoHTML += `
                <div class="effectiveness-group">
                    <div class="effectiveness-label weak">Weak (2x):</div>
                    <div class="effectiveness-types">
                        ${pokemon.typeEffectiveness.weak.map(type => 
                            `<span class="type-pill ${type.toLowerCase()}-type">${type}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add resistances (0.5x damage) with green background
        if (pokemon.typeEffectiveness.resistant && pokemon.typeEffectiveness.resistant.length > 0) {
            infoHTML += `
                <div class="effectiveness-group">
                    <div class="effectiveness-label resistant">Resistant (0.5x):</div>
                    <div class="effectiveness-types">
                        ${pokemon.typeEffectiveness.resistant.map(type => 
                            `<span class="type-pill ${type.toLowerCase()}-type">${type}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add super resistances (0.25x damage) with blue background
        if (pokemon.typeEffectiveness.superResistant && pokemon.typeEffectiveness.superResistant.length > 0) {
            infoHTML += `
                <div class="effectiveness-group">
                    <div class="effectiveness-label super-resistant">Super Resistant (0.25x):</div>
                    <div class="effectiveness-types">
                        ${pokemon.typeEffectiveness.superResistant.map(type => 
                            `<span class="type-pill ${type.toLowerCase()}-type">${type}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add immunities (0x damage) with purple background
        if (pokemon.typeEffectiveness.immune && pokemon.typeEffectiveness.immune.length > 0) {
            infoHTML += `
                <div class="effectiveness-group">
                    <div class="effectiveness-label immune">Immune (0x):</div>
                    <div class="effectiveness-types">
                        ${pokemon.typeEffectiveness.immune.map(type => 
                            `<span class="type-pill ${type.toLowerCase()}-type">${type}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        
        infoHTML += `
                </div>
            </div>
        `;
    }
    
    // Add moves section if the Pokemon has moves
    if (pokemon.moves && pokemon.moves.length > 0) {
        infoHTML += `
            <div class="info-section">
                <h4 class="section-title">Moves</h4>
                <ul class="moves-list">
        `;
        
        pokemon.moves.forEach(move => {
            // Create a category badge based on damage category
            const categoryClass = move.damage_category.toLowerCase().replace(' ', '-');
            
            infoHTML += `
                <li class="move-item">
                    <div class="move-header">
                        <div class="move-name-container">
                            <strong class="move-name">${move.name}</strong>
                            <span class="move-category ${categoryClass}-category">${move.damage_category}</span>
                        </div>
                        <span class="move-type ${move.type.toLowerCase()}-type">${move.type}</span>
                    </div>
                    <div class="move-details">
                        <div class="move-stat"><span class="move-stat-label">Power:</span> <span class="move-stat-value">${move.power || 'N/A'}</span></div>
                        <div class="move-stat"><span class="move-stat-label">Accuracy:</span> <span class="move-stat-value">${move.accuracy ? move.accuracy + '%' : 'N/A'}</span></div>
                    </div>
                </li>
            `;
        });
        
        infoHTML += `
                </ul>
            </div>
        `;
    }
    
    infoHTML += `</div>`; // Close the info-content div
    
    pokemonInfo.innerHTML = infoHTML;
}

// Show evolution animation
function showEvolutionAnimation(basePokemon, evolvedPokemon) {
    // Set images for animation
    preEvolutionImg.src = basePokemon.image.front;
    postEvolutionImg.src = evolvedPokemon.image.front;
    
    // Show animation
    evolutionAnimation.classList.add('active');
    
    // Hide after animation completes
    setTimeout(() => {
        evolutionAnimation.classList.remove('active');
    }, 3000);
}

// Show battle result message
function showBattleResult(message) {
    const resultElement = document.createElement('div');
    resultElement.className = 'battle-result';
    resultElement.textContent = message;
    
    document.body.appendChild(resultElement);
    
    // Remove after display
    setTimeout(() => {
        resultElement.remove();
    }, 3000);
}