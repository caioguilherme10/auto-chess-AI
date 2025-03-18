// Shop system functionality

// Refresh the shop with random Pokemon
function refreshShop() {
    // Clear current shop
    gameState.shop = Array(5).fill(null);
    
    // Fill with random Pokemon
    for (let i = 0; i < 5; i++) {
        // Small chance (5%) to get a legendary Pokemon
        const isLegendary = Math.random() < 0.05;
        
        if (isLegendary) {
            const legendaryPokemon = [
                'Articuno', 'Zapdos', 'Moltres', 'Mew', 'Mewtwo'
            ];
            const randomLegendary = legendaryPokemon[Math.floor(Math.random() * legendaryPokemon.length)];
            gameState.shop[i] = { ...pokemonDataL[randomLegendary], id: generateUniqueId() };
        } else {
            const basePokemon = [
                'Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie', 'Weedle', 'Pidgey',
                'Dratini', 'Gastly', 'Geodude', 'Bellsprout', 'Machop', 'Abra',
                'Poliwag', 'Oddish', 'NidoranM', 'NidoranF'
            ];
            const randomPokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
            gameState.shop[i] = { ...pokemonData[randomPokemon], id: generateUniqueId() };
        }
    }
    
    renderShop();
}

// Generate a unique ID for each Pokemon instance
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

// Render the shop
function renderShop() {
    const shopSlots = document.querySelectorAll('.shop-slot');
    
    shopSlots.forEach((slot, index) => {
        slot.innerHTML = '';
        
        if (gameState.shop[index]) {
            const pokemon = gameState.shop[index];
            const pokemonElement = createPokemonElement(pokemon);
            
            // Add cost indicator with color coding
            const costElement = document.createElement('div');
            costElement.className = 'pokemon-cost';
            costElement.textContent = pokemon.cost;
            pokemonElement.appendChild(costElement);
            
            // Add data-cost attribute for CSS styling
            pokemonElement.setAttribute('data-cost', pokemon.cost);
            
            slot.appendChild(pokemonElement);
        }
    });
}

// Buy a Pokemon from the shop
function buyPokemon(shopIndex) {
    const pokemon = gameState.shop[shopIndex];
    
    if (pokemon && gameState.gold >= pokemon.cost) {
        // Find empty bench slot
        const emptySlotIndex = gameState.bench.findIndex(slot => slot === null);
        
        if (emptySlotIndex !== -1) {
            gameState.gold -= pokemon.cost;
            gameState.bench[emptySlotIndex] = pokemon;
            gameState.shop[shopIndex] = null;
            
            renderBench();
            renderShop();
            updateStats();
            
            // Check for possible evolutions
            checkEvolutions();
        } else {
            alert('Your bench is full!');
        }
    }
}

// Show sell feedback
function showSellFeedback(amount) {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = 'sell-feedback';
    feedbackElement.textContent = `+${amount} Gold`;
    
    // Position near trash bin
    const trashBin = document.getElementById('trash-bin');
    if (trashBin) {
        const rect = trashBin.getBoundingClientRect();
        feedbackElement.style.left = `${rect.left + rect.width/2}px`;
        feedbackElement.style.top = `${rect.top - 20}px`;
    }
    
    document.body.appendChild(feedbackElement);
    
    // Animate and remove
    setTimeout(() => {
        feedbackElement.classList.add('fade-out');
        setTimeout(() => {
            feedbackElement.remove();
        }, 500);
    }, 1000);
}