// Shop system functionality

// Refresh the shop with random Pokemon
function refreshShop() {
    // Clear current shop
    gameState.shop = Array(5).fill(null);
    
    // Categorize Pokemon by cost tier
    const greenTierPokemon = []; // cost 1
    const blueTierPokemon = [];  // cost 2
    const purpleTierPokemon = []; // cost 3
    const goldTierPokemon = [    // legendary
        'Articuno', 'Zapdos', 'Moltres', 'Mew', 'Mewtwo'
    ];
    
    // Categorize base Pokemon by their cost
    for (const pokemonName in pokemonData) {
        const pokemon = pokemonData[pokemonName];
        // Only include base (level 1) Pokemon in the shop
        if (pokemon.level === 1) {
            if (pokemon.cost === 1) {
                greenTierPokemon.push(pokemonName);
            } else if (pokemon.cost === 2) {
                blueTierPokemon.push(pokemonName);
            } else if (pokemon.cost === 3) {
                purpleTierPokemon.push(pokemonName);
            }
        }
    }
    
    // Fill shop with Pokemon based on tier probabilities
    for (let i = 0; i < 5; i++) {
        const randomValue = Math.random() * 100;
        
        // 45% chance for green tier (cost 1)
        // 30% chance for blue tier (cost 2)
        // 20% chance for purple tier (cost 3)
        // 5% chance for gold tier (legendary)
        
        if (randomValue < 45) {
            // Green tier (cost 1)
            const randomPokemon = greenTierPokemon[Math.floor(Math.random() * greenTierPokemon.length)];
            gameState.shop[i] = { ...pokemonData[randomPokemon], id: generateUniqueId() };
        } else if (randomValue < 75) {
            // Blue tier (cost 2)
            const randomPokemon = blueTierPokemon[Math.floor(Math.random() * blueTierPokemon.length)];
            gameState.shop[i] = { ...pokemonData[randomPokemon], id: generateUniqueId() };
        } else if (randomValue < 95) {
            // Purple tier (cost 3)
            const randomPokemon = purpleTierPokemon[Math.floor(Math.random() * purpleTierPokemon.length)];
            gameState.shop[i] = { ...pokemonData[randomPokemon], id: generateUniqueId() };
        } else {
            // Gold tier (legendary)
            const randomLegendary = goldTierPokemon[Math.floor(Math.random() * goldTierPokemon.length)];
            gameState.shop[i] = { ...pokemonDataL[randomLegendary], id: generateUniqueId() };
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