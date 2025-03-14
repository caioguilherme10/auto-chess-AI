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
            <p>Attack: ${pokemon.stats.attack}</p>
            <p>Health: ${pokemon.stats.health}</p>
            <p>Range: ${pokemon.stats.range}</p>
            ${pokemon.evolution ? `<p>Evolves to: ${pokemon.evolution}</p>` : ''}
    `;
    
    // Add moves section if the Pokemon has moves
    if (pokemon.moves && pokemon.moves.length > 0) {
        infoHTML += `<h4>Moves:</h4><ul>`;
        
        pokemon.moves.forEach(move => {
            infoHTML += `
                <li>
                    <strong>${move.name}</strong> - ${move.type} type<br>
                    Category: ${move.damage_category}<br>
                    Power: ${move.power} | Accuracy: ${move.accuracy}%
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