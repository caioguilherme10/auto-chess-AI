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
    if (Array.isArray(pokemon.type)) {
        typeDisplay = pokemon.type.join('/');
    } else {
        typeDisplay = pokemon.type;
    }
    
    // Start with basic Pokemon info
    let infoHTML = `
        <h3>${pokemon.name}</h3>
        <div class="info-content">
            <p>Type: ${typeDisplay}</p>
            <p>Level: ${pokemon.level}</p>
            
            <h4>Stats:</h4>
            <div class="stats-grid">
                <div class="stat">HP: ${pokemon.stats.health}</div>
                <div class="stat">Attack: ${pokemon.stats.attack}</div>
                <div class="stat">Range: ${pokemon.stats.range}</div>
                ${pokemon.stats.physicalAttack ? `<div class="stat">Physical Atk: ${pokemon.stats.physicalAttack}</div>` : ''}
                ${pokemon.stats.physicalDefense ? `<div class="stat">Physical Def: ${pokemon.stats.physicalDefense}</div>` : ''}
                ${pokemon.stats.specialAttack ? `<div class="stat">Special Atk: ${pokemon.stats.specialAttack}</div>` : ''}
                ${pokemon.stats.specialDefense ? `<div class="stat">Special Def: ${pokemon.stats.specialDefense}</div>` : ''}
                ${pokemon.stats.speed ? `<div class="stat">Speed: ${pokemon.stats.speed}</div>` : ''}
            </div>
            
            ${pokemon.evolution ? `<p>Evolves to: ${pokemon.evolution}</p>` : ''}
    `;
    
    // Add type effectiveness section if available
    if (pokemon.typeEffectiveness) {
        infoHTML += `<h4>Type Effectiveness:</h4><div class="type-effectiveness">`;
        
        // Add weaknesses
        if (pokemon.typeEffectiveness.weak && pokemon.typeEffectiveness.weak.length > 0) {
            infoHTML += `<p><strong>Weak to:</strong> ${pokemon.typeEffectiveness.weak.join(', ')}</p>`;
        }
        
        // Add super weaknesses
        if (pokemon.typeEffectiveness.superWeak && pokemon.typeEffectiveness.superWeak.length > 0) {
            infoHTML += `<p><strong>Super weak to:</strong> ${pokemon.typeEffectiveness.superWeak.join(', ')}</p>`;
        }
        
        // Add resistances
        if (pokemon.typeEffectiveness.resistant && pokemon.typeEffectiveness.resistant.length > 0) {
            infoHTML += `<p><strong>Resistant to:</strong> ${pokemon.typeEffectiveness.resistant.join(', ')}</p>`;
        }
        
        // Add super resistances
        if (pokemon.typeEffectiveness.superResistant && pokemon.typeEffectiveness.superResistant.length > 0) {
            infoHTML += `<p><strong>Super resistant to:</strong> ${pokemon.typeEffectiveness.superResistant.join(', ')}</p>`;
        }
        
        // Add immunities
        if (pokemon.typeEffectiveness.immune && pokemon.typeEffectiveness.immune.length > 0) {
            infoHTML += `<p><strong>Immune to:</strong> ${pokemon.typeEffectiveness.immune.join(', ')}</p>`;
        }
        
        infoHTML += `</div>`;
    }
    
    // Add moves section if the Pokemon has moves
    if (pokemon.moves && pokemon.moves.length > 0) {
        infoHTML += `<h4>Moves:</h4><ul class="moves-list">`;
        
        pokemon.moves.forEach(move => {
            infoHTML += `
                <li class="move-item">
                    <div class="move-header">
                        <strong>${move.name}</strong>
                        <span class="move-type ${move.type}-type">${move.type}</span>
                    </div>
                    <div class="move-details">
                        <span>Category: ${move.damage_category}</span>
                        <span>Power: ${move.power}</span>
                        <span>Accuracy: ${move.accuracy}%</span>
                    </div>
                </li>
            `;
        });
        
        infoHTML += `</ul>`;
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