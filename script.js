// Pokemon data with their evolution chains and stats
const pokemonData = {
    // Base Pokemon (Level 1)
    'Bulbasaur': {
        name: 'Bulbasaur',
        type: ['grass', 'poison'],
        level: 1,
        evolution: 'Ivysaur',
        cost: 1,
        stats: {
            attack: 15,
            health: 100,
            range: 2
        },
        image: {
            front: 'image/Bulbasaur_Front.png',
            back: 'image/Bulbasaur_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Vine Whip',
                type: 'grass',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charmander': {
        name: 'Charmander',
        type: 'fire',
        level: 1,
        evolution: 'Charmeleon',
        cost: 1,
        stats: {
            attack: 20,
            health: 80,
            range: 1
        },
        image: {
            front: 'image/Charmander_Front.png',
            back: 'image/Charmander_Back.png'
        }
    },
    'Squirtle': {
        name: 'Squirtle',
        type: 'water',
        level: 1,
        evolution: 'Wartortle',
        cost: 1,
        stats: {
            attack: 12,
            health: 120,
            range: 1
        },
        image: {
            front: 'image/Squirtle_Front.png',
            back: 'image/Squirtle_Back.png'
        }
    },
    'Caterpie': {
        name: 'Caterpie',
        type: 'bug',
        level: 1,
        evolution: 'Metapod',
        cost: 1,
        stats: {
            attack: 10,
            health: 90,
            range: 1
        },
        image: {
            front: 'image/Caterpie_Front.png',
            back: 'image/Caterpie_Back.png'
        }
    },
    'Weedle': {
        name: 'Weedle',
        type: 'bug',
        level: 1,
        evolution: 'Kakuna',
        cost: 1,
        stats: {
            attack: 12,
            health: 85,
            range: 1
        },
        image: {
            front: 'image/Weedle_Front.png',
            back: 'image/Weedle_Back.png'
        }
    },
    'Pidgey': {
        name: 'Pidgey',
        type: 'flying',
        level: 1,
        evolution: 'Pidgeotto',
        cost: 1,
        stats: {
            attack: 14,
            health: 95,
            range: 2
        },
        image: {
            front: 'image/Pidgey_Front.png',
            back: 'image/Pidgey_Back.png'
        }
    },
    // New Pokemon - Dratini evolution line
    'Dratini': {
        name: 'Dratini',
        type: 'dragon',
        level: 1,
        evolution: 'Dragonair',
        cost: 1,
        stats: {
            attack: 18,
            health: 90,
            range: 1
        },
        image: {
            front: 'image/Dratini_Front.png',
            back: 'image/Dratini_Back.png'
        }
    },
    // New Pokemon - Gastly evolution line
    'Gastly': {
        name: 'Gastly',
        type: 'ghost',
        level: 1,
        evolution: 'Haunter',
        cost: 1,
        stats: {
            attack: 22,
            health: 70,
            range: 2
        },
        image: {
            front: 'image/Gastly_Front.png',
            back: 'image/Gastly_Back.png'
        }
    },
    // New Pokemon - Geodude evolution line
    'Geodude': {
        name: 'Geodude',
        type: 'rock',
        level: 1,
        evolution: 'Graveler',
        cost: 1,
        stats: {
            attack: 16,
            health: 130,
            range: 1
        },
        image: {
            front: 'image/Geodude_Front.png',
            back: 'image/Geodude_Back.png'
        }
    },
    // New Pokemon - Bellsprout evolution line
    'Bellsprout': {
        name: 'Bellsprout',
        type: 'grass',
        level: 1,
        evolution: 'Weepinbell',
        cost: 1,
        stats: {
            attack: 17,
            health: 85,
            range: 2
        },
        image: {
            front: 'image/Bellsprout_Front.png',
            back: 'image/Bellsprout_Back.png'
        }
    },
    // New Pokemon - Machop evolution line
    'Machop': {
        name: 'Machop',
        type: 'fighting',
        level: 1,
        evolution: 'Machoke',
        cost: 1,
        stats: {
            attack: 21,
            health: 110,
            range: 1
        },
        image: {
            front: 'image/Machop_Front.png',
            back: 'image/Machop_Back.png'
        }
    },
    // New Pokemon - Abra evolution line
    'Abra': {
        name: 'Abra',
        type: 'psychic',
        level: 1,
        evolution: 'Kadabra',
        cost: 1,
        stats: {
            attack: 25,
            health: 65,
            range: 3
        },
        image: {
            front: 'image/Abra_Front.png',
            back: 'image/Abra_Back.png'
        }
    },
    // New Pokemon - Poliwag evolution line
    'Poliwag': {
        name: 'Poliwag',
        type: 'water',
        level: 1,
        evolution: 'Poliwhirl',
        cost: 1,
        stats: {
            attack: 14,
            health: 105,
            range: 1
        },
        image: {
            front: 'image/Poliwag_Front.png',
            back: 'image/Poliwag_Back.png'
        }
    },
    // New Pokemon - Oddish evolution line
    'Oddish': {
        name: 'Oddish',
        type: 'grass',
        level: 1,
        evolution: 'Gloom',
        cost: 1,
        stats: {
            attack: 16,
            health: 95,
            range: 2
        },
        image: {
            front: 'image/Oddish_Front.png',
            back: 'image/Oddish_Back.png'
        }
    },
    // New Pokemon - NidoranM evolution line
    'NidoranM': {
        name: 'NidoranM',
        type: 'poison',
        level: 1,
        evolution: 'Nidorino',
        cost: 1,
        stats: {
            attack: 19,
            health: 100,
            range: 1
        },
        image: {
            front: 'image/NidoranM_Front.png',
            back: 'image/NidoranM_Back.png'
        }
    },
    // New Pokemon - NidoranF evolution line
    'NidoranF': {
        name: 'NidoranF',
        type: 'poison',
        level: 1,
        evolution: 'Nidorina',
        cost: 1,
        stats: {
            attack: 17,
            health: 110,
            range: 1
        },
        image: {
            front: 'image/NidoranF_Front.png',
            back: 'image/NidoranF_Back.png'
        }
    },
    
    // Level 2 Evolutions
    'Ivysaur': {
        name: 'Ivysaur',
        type: 'grass',
        level: 2,
        evolution: 'Venusaur',
        stats: {
            attack: 30,
            health: 200,
            range: 2
        },
        image: {
            front: 'image/Ivysaur_Front.png',
            back: 'image/Ivysaur_Back.png'
        }
    },
    'Charmeleon': {
        name: 'Charmeleon',
        type: 'fire',
        level: 2,
        evolution: 'Charizard',
        stats: {
            attack: 40,
            health: 160,
            range: 1
        },
        image: {
            front: 'image/Charmeleon_Front.png',
            back: 'image/Charmeleon_Back.png'
        }
    },
    'Wartortle': {
        name: 'Wartortle',
        type: 'water',
        level: 2,
        evolution: 'Blastoise',
        stats: {
            attack: 24,
            health: 240,
            range: 1
        },
        image: {
            front: 'image/Wartortle_Front.png',
            back: 'image/Wartortle_Back.png'
        }
    },
    'Metapod': {
        name: 'Metapod',
        type: 'bug',
        level: 2,
        evolution: 'Butterfree',
        stats: {
            attack: 20,
            health: 180,
            range: 1
        },
        image: {
            front: 'image/Metapod_Front.png',
            back: 'image/Metapod_Back.png'
        }
    },
    'Kakuna': {
        name: 'Kakuna',
        type: 'bug',
        level: 2,
        evolution: 'Beedrill',
        stats: {
            attack: 24,
            health: 170,
            range: 1
        },
        image: {
            front: 'image/Kakuna_Front.png',
            back: 'image/Kakuna_Back.png'
        }
    },
    'Pidgeotto': {
        name: 'Pidgeotto',
        type: 'flying',
        level: 2,
        evolution: 'Pidgeot',
        stats: {
            attack: 28,
            health: 190,
            range: 2
        },
        image: {
            front: 'image/Pidgeotto_Front.png',
            back: 'image/Pidgeotto_Back.png'
        }
    },
    // New Pokemon - Level 2 Evolutions
    'Dragonair': {
        name: 'Dragonair',
        type: 'dragon',
        level: 2,
        evolution: 'Dragonite',
        stats: {
            attack: 36,
            health: 180,
            range: 1
        },
        image: {
            front: 'image/Dragonair_Front.png',
            back: 'image/Dragonair_Back.png'
        }
    },
    'Haunter': {
        name: 'Haunter',
        type: 'ghost',
        level: 2,
        evolution: 'Gengar',
        stats: {
            attack: 44,
            health: 140,
            range: 2
        },
        image: {
            front: 'image/Haunter_Front.png',
            back: 'image/Haunter_Back.png'
        }
    },
    'Graveler': {
        name: 'Graveler',
        type: 'rock',
        level: 2,
        evolution: 'Golem',
        stats: {
            attack: 32,
            health: 260,
            range: 1
        },
        image: {
            front: 'image/Graveler_Front.png',
            back: 'image/Graveler_Back.png'
        }
    },
    'Weepinbell': {
        name: 'Weepinbell',
        type: 'grass',
        level: 2,
        evolution: 'Victreebel',
        stats: {
            attack: 34,
            health: 170,
            range: 2
        },
        image: {
            front: 'image/Weepinbell_Front.png',
            back: 'image/Weepinbell_Back.png'
        }
    },
    'Machoke': {
        name: 'Machoke',
        type: 'fighting',
        level: 2,
        evolution: 'Machamp',
        stats: {
            attack: 42,
            health: 220,
            range: 1
        },
        image: {
            front: 'image/Machoke_Front.png',
            back: 'image/Machoke_Back.png'
        }
    },
    'Kadabra': {
        name: 'Kadabra',
        type: 'psychic',
        level: 2,
        evolution: 'Alakazam',
        stats: {
            attack: 50,
            health: 130,
            range: 3
        },
        image: {
            front: 'image/Kadabra_Front.png',
            back: 'image/Kadabra_Back.png'
        }
    },
    'Poliwhirl': {
        name: 'Poliwhirl',
        type: 'water',
        level: 2,
        evolution: 'Poliwrath',
        stats: {
            attack: 28,
            health: 210,
            range: 1
        },
        image: {
            front: 'image/Poliwhirl_Front.png',
            back: 'image/Poliwhirl_Back.png'
        }
    },
    'Gloom': {
        name: 'Gloom',
        type: 'grass',
        level: 2,
        evolution: 'Vileplume',
        stats: {
            attack: 32,
            health: 190,
            range: 2
        },
        image: {
            front: 'image/Gloom_Front.png',
            back: 'image/Gloom_Back.png'
        }
    },
    'Nidorino': {
        name: 'Nidorino',
        type: 'poison',
        level: 2,
        evolution: 'Nidoking',
        stats: {
            attack: 38,
            health: 200,
            range: 1
        },
        image: {
            front: 'image/Nidorino_Front.png',
            back: 'image/Nidorino_Back.png'
        }
    },
    'Nidorina': {
        name: 'Nidorina',
        type: 'poison',
        level: 2,
        evolution: 'Nidoqueen',
        stats: {
            attack: 34,
            health: 220,
            range: 1
        },
        image: {
            front: 'image/Nidorina_Front.png',
            back: 'image/Nidorina_Back.png'
        }
    },
    
    // Level 3 Evolutions
    'Venusaur': {
        name: 'Venusaur',
        type: 'grass',
        level: 3,
        stats: {
            attack: 60,
            health: 400,
            range: 3
        },
        image: {
            front: 'image/Venusaur_Front.png',
            back: 'image/Venusaur_Back.png'
        }
    },
    'Charizard': {
        name: 'Charizard',
        type: 'fire',
        level: 3,
        stats: {
            attack: 80,
            health: 320,
            range: 2
        },
        image: {
            front: 'image/Charizard_Front.png',
            back: 'image/Charizard_Back.png'
        }
    },
    'Blastoise': {
        name: 'Blastoise',
        type: 'water',
        level: 3,
        stats: {
            attack: 48,
            health: 480,
            range: 2
        },
        image: {
            front: 'image/Blastoise_Front.png',
            back: 'image/Blastoise_Back.png'
        }
    },
    'Butterfree': {
        name: 'Butterfree',
        type: 'bug',
        level: 3,
        stats: {
            attack: 40,
            health: 360,
            range: 3
        },
        image: {
            front: 'image/Butterfree_Front.png',
            back: 'image/Butterfree_Back.png'
        }
    },
    'Beedrill': {
        name: 'Beedrill',
        type: 'bug',
        level: 3,
        stats: {
            attack: 48,
            health: 340,
            range: 2
        },
        image: {
            front: 'image/Beedrill_Front.png',
            back: 'image/Beedrill_Back.png'
        }
    },
    'Pidgeot': {
        name: 'Pidgeot',
        type: 'flying',
        level: 3,
        stats: {
            attack: 56,
            health: 380,
            range: 3
        },
        image: {
            front: 'image/Pidgeot_Front.png',
            back: 'image/Pidgeot_Back.png'
        }
    },
    // New Pokemon - Level 3 Evolutions
    'Dragonite': {
        name: 'Dragonite',
        type: 'dragon',
        level: 3,
        stats: {
            attack: 72,
            health: 360,
            range: 2
        },
        image: {
            front: 'image/Dragonite_Front.png',
            back: 'image/Dragonite_Back.png'
        }
    },
    'Gengar': {
        name: 'Gengar',
        type: 'ghost',
        level: 3,
        stats: {
            attack: 88,
            health: 280,
            range: 2
        },
        image: {
            front: 'image/Gengar_Front.png',
            back: 'image/Gengar_Back.png'
        }
    },
    'Golem': {
        name: 'Golem',
        type: 'rock',
        level: 3,
        stats: {
            attack: 64,
            health: 520,
            range: 1
        },
        image: {
            front: 'image/Golem_Front.png',
            back: 'image/Golem_Back.png'
        }
    },
    'Victreebel': {
        name: 'Victreebel',
        type: 'grass',
        level: 3,
        stats: {
            attack: 68,
            health: 340,
            range: 2
        },
        image: {
            front: 'image/Victreebel_Front.png',
            back: 'image/Victreebel_Back.png'
        }
    },
    'Machamp': {
        name: 'Machamp',
        type: 'fighting',
        level: 3,
        stats: {
            attack: 84,
            health: 440,
            range: 1
        },
        image: {
            front: 'image/Machamp_Front.png',
            back: 'image/Machamp_Back.png'
        }
    },
    'Alakazam': {
        name: 'Alakazam',
        type: 'psychic',
        level: 3,
        stats: {
            attack: 100,
            health: 260,
            range: 3
        },
        image: {
            front: 'image/Alakazam_Front.png',
            back: 'image/Alakazam_Back.png'
        }
    },
    'Poliwrath': {
        name: 'Poliwrath',
        type: 'water',
        level: 3,
        stats: {
            attack: 56,
            health: 420,
            range: 1
        },
        image: {
            front: 'image/Poliwrath_Front.png',
            back: 'image/Poliwrath_Back.png'
        }
    },
    'Vileplume': {
        name: 'Vileplume',
        type: 'grass',
        level: 3,
        stats: {
            attack: 64,
            health: 380,
            range: 2
        },
        image: {
            front: 'image/Vileplume_Front.png',
            back: 'image/Vileplume_Back.png'
        }
    },
    'Nidoking': {
        name: 'Nidoking',
        type: 'poison',
        level: 3,
        stats: {
            attack: 76,
            health: 400,
            range: 1
        },
        image: {
            front: 'image/Nidoking_Front.png',
            back: 'image/Nidoking_Back.png'
        }
    },
    'Nidoqueen': {
        name: 'Nidoqueen',
        type: 'poison',
        level: 3,
        stats: {
            attack: 68,
            health: 440,
            range: 1
        },
        image: {
            front: 'image/Nidoqueen_Front.png',
            back: 'image/Nidoqueen_Back.png'
        }
    }
};

// Game state
const gameState = {
    gold: 10,
    health: 100,
    level: 1,
    maxBoardUnits: 3, // Initial max units on board based on level
    bench: Array(9).fill(null),
    board: Array(6).fill().map(() => Array(8).fill(null)),
    shop: Array(5).fill(null),
    selectedPokemon: null,
    draggedPokemon: null,
    dragSource: null,
    inBattle: false,
    enemyBoard: [],
    battleUnits: []
};

// DOM Elements
const goldElement = document.getElementById('gold-amount');
const healthElement = document.getElementById('health-amount');
const levelElement = document.getElementById('player-level');
const battleBoard = document.getElementById('battle-board');
const playerBench = document.getElementById('player-bench');
const pokemonShop = document.getElementById('pokemon-shop');
const pokemonInfo = document.getElementById('pokemon-info');
const refreshShopButton = document.getElementById('refresh-shop');
const buyExpButton = document.getElementById('buy-exp');
const startBattleButton = document.getElementById('start-battle');
const evolutionAnimation = document.getElementById('evolution-animation');
const preEvolutionImg = document.getElementById('pre-evolution');
const postEvolutionImg = document.getElementById('post-evolution');

// Initialize the game
function initGame() {
    updateStats();
    refreshShop();
    setupEventListeners();
    renderBench();
    renderBoard();
}

// Update player stats display
function updateStats() {
    goldElement.textContent = gameState.gold;
    healthElement.textContent = gameState.health;
    levelElement.textContent = gameState.level;
    
    // Update max board units based on level
    gameState.maxBoardUnits = gameState.level + 2;
}

// Refresh the shop with random Pokemon
function refreshShop() {
    // Clear current shop
    gameState.shop = Array(5).fill(null);
    
    // Fill with random Pokemon
    for (let i = 0; i < 5; i++) {
        const basePokemon = [
            'Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie', 'Weedle', 'Pidgey',
            'Dratini', 'Gastly', 'Geodude', 'Bellsprout', 'Machop', 'Abra',
            'Poliwag', 'Oddish', 'NidoranM', 'NidoranF'
        ];
        const randomPokemon = basePokemon[Math.floor(Math.random() * basePokemon.length)];
        gameState.shop[i] = { ...pokemonData[randomPokemon], id: generateUniqueId() };
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
            
            // Add cost indicator
            const costElement = document.createElement('div');
            costElement.className = 'pokemon-cost';
            costElement.textContent = pokemon.cost;
            pokemonElement.appendChild(costElement);
            
            slot.appendChild(pokemonElement);
        }
    });
}

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

// Setup event listeners
function setupEventListeners() {
    // Shop refresh button
    refreshShopButton.addEventListener('click', () => {
        if (gameState.gold >= 2) {
            gameState.gold -= 2;
            refreshShop();
            updateStats();
        }
    });
    
    // Buy EXP button
    buyExpButton.addEventListener('click', () => {
        if (gameState.gold >= 4) {
            gameState.gold -= 4;
            gameState.level += 1;
            updateStats();
        }
    });
    
    // Start battle button
    startBattleButton.addEventListener('click', () => {
        if (!gameState.inBattle) {
            startBattle();
        }
    });
    
    // Shop click events
    pokemonShop.addEventListener('click', (e) => {
        const shopSlot = e.target.closest('.shop-slot');
        if (shopSlot) {
            const shopIndex = parseInt(shopSlot.dataset.shop);
            buyPokemon(shopIndex);
        }
    });
    
    // Setup drag and drop for bench and board
    setupDragAndDrop();
    
    // Pokemon selection for info display
    document.addEventListener('click', (e) => {
        const pokemonElement = e.target.closest('.pokemon');
        if (pokemonElement) {
            selectPokemon(pokemonElement);
        } else {
            deselectPokemon();
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

// Setup drag and drop functionality
function setupDragAndDrop() {
    // Make elements draggable
    document.querySelectorAll('.bench-slot, .cell').forEach(element => {
        element.setAttribute('draggable', 'true');
        
        // Common drag over and drop handling
        element.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
    });
    
    // Trash bin drag events
    const trashBin = document.getElementById('trash-bin');
    if (trashBin) {
        trashBin.addEventListener('dragover', (e) => {
            e.preventDefault();
            trashBin.classList.add('drag-over');
        });
        
        trashBin.addEventListener('dragleave', () => {
            trashBin.classList.remove('drag-over');
        });
        
        trashBin.addEventListener('drop', (e) => {
            e.preventDefault();
            trashBin.classList.remove('drag-over');
            
            if (!gameState.draggedPokemon) return;
            
            // Only allow selling from bench
            if (gameState.dragSource.type === 'bench') {
                const sourceIndex = gameState.dragSource.index;
                const pokemon = gameState.bench[sourceIndex];
                
                // Calculate sell value based on Pokemon level and cost
                let sellValue = 0;
                if (pokemon.cost) {
                    sellValue = pokemon.cost;
                    if (pokemon.level > 1) {
                        sellValue = pokemon.cost * Math.pow(3, pokemon.level - 1);
                    }
                } else {
                    // Default value if cost is not defined
                    sellValue = pokemon.level;
                }
                
                // Add gold to player
                gameState.gold += sellValue;
                
                // Remove Pokemon from bench
                gameState.bench[sourceIndex] = null;
                
                // Show sell animation/feedback
                showSellFeedback(sellValue);
                
                // Update UI
                renderBench();
                updateStats();
            }
            
            // Reset drag state
            gameState.draggedPokemon = null;
            gameState.dragSource = null;
        });
    }
    
    // Bench drag events
    playerBench.addEventListener('dragstart', (e) => {
        const benchSlot = e.target.closest('.bench-slot');
        if (benchSlot) {
            const slotIndex = parseInt(benchSlot.dataset.slot);
            if (gameState.bench[slotIndex]) {
                gameState.draggedPokemon = gameState.bench[slotIndex];
                gameState.dragSource = { type: 'bench', index: slotIndex };
            }
        }
    });
    
    // Board drag events
    battleBoard.addEventListener('dragstart', (e) => {
        const cell = e.target.closest('.cell');
        if (cell) {
            const [row, col] = cell.dataset.position.split('-').map(Number);
            if (gameState.board[row][col]) {
                gameState.draggedPokemon = gameState.board[row][col];
                gameState.dragSource = { type: 'board', position: [row, col] };
            }
        }
    });
    
    // Bench drop events
    playerBench.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!gameState.draggedPokemon) return;
        
        const benchSlot = e.target.closest('.bench-slot');
        if (benchSlot) {
            const targetIndex = parseInt(benchSlot.dataset.slot);
            
            // If dragging from board to bench
            if (gameState.dragSource.type === 'board') {
                const [sourceRow, sourceCol] = gameState.dragSource.position;
                
                // Move from board to bench
                gameState.bench[targetIndex] = gameState.draggedPokemon;
                gameState.board[sourceRow][sourceCol] = null;
            } 
            // If dragging from bench to bench
            else if (gameState.dragSource.type === 'bench') {
                const sourceIndex = gameState.dragSource.index;
                
                // Swap positions on bench
                const targetPokemon = gameState.bench[targetIndex];
                gameState.bench[targetIndex] = gameState.draggedPokemon;
                gameState.bench[sourceIndex] = targetPokemon;
            }
            
            renderBench();
            renderBoard();
            checkEvolutions();
        }
        
        // Reset drag state
        gameState.draggedPokemon = null;
        gameState.dragSource = null;
    });
    
    // Board drop events
    battleBoard.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!gameState.draggedPokemon || gameState.inBattle) return;
        
        const cell = e.target.closest('.cell');
        if (cell) {
            const [targetRow, targetCol] = cell.dataset.position.split('-').map(Number);
            
            // Check if the target cell is in the player area (rows 3, 4, and 5)
            const isPlayerArea = targetRow >= 3 && targetRow <= 5;
            
            // Only allow placement in player area
            if (!isPlayerArea) {
                // Reset drag state and return if not in player area
                gameState.draggedPokemon = null;
                gameState.dragSource = null;
                return;
            }
            
            // Count current units on board
            const currentUnitsOnBoard = gameState.board.flat().filter(unit => unit !== null).length;
            
            // If dragging from bench to board
            if (gameState.dragSource.type === 'bench') {
                // Check if we're under the unit limit
                if (gameState.board[targetRow][targetCol] === null && 
                    currentUnitsOnBoard < gameState.maxBoardUnits) {
                    const sourceIndex = gameState.dragSource.index;
                    
                    // Move from bench to board
                    gameState.board[targetRow][targetCol] = gameState.draggedPokemon;
                    gameState.bench[sourceIndex] = null;
                } else if (gameState.board[targetRow][targetCol] !== null) {
                    // Swap with existing unit on board
                    const sourceIndex = gameState.dragSource.index;
                    const targetPokemon = gameState.board[targetRow][targetCol];
                    
                    gameState.board[targetRow][targetCol] = gameState.draggedPokemon;
                    gameState.bench[sourceIndex] = targetPokemon;
                }
            } 
            // If dragging from board to board
            else if (gameState.dragSource.type === 'board') {
                const [sourceRow, sourceCol] = gameState.dragSource.position;
                
                // Only allow movement within player area
                if (sourceRow >= 3 && sourceRow <= 5) {
                    // Swap positions on board
                    const targetPokemon = gameState.board[targetRow][targetCol];
                    gameState.board[targetRow][targetCol] = gameState.draggedPokemon;
                    gameState.board[sourceRow][sourceCol] = targetPokemon;
                }
            }
            
            renderBench();
            renderBoard();
        }
        
        // Reset drag state
        gameState.draggedPokemon = null;
        gameState.dragSource = null;
    });
    
    // Reset drag on dragend
    document.addEventListener('dragend', () => {
        gameState.draggedPokemon = null;
        gameState.dragSource = null;
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
    
    pokemonInfo.innerHTML = infoHTML;
}

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

// Generate enemy board based on player level
function generateEnemyBoard() {
    gameState.enemyBoard = [];
    
    // Number of enemy units based on player level
    const enemyUnitCount = Math.min(gameState.level + 2, 8);
    
    // Possible Pokemon types for enemies
    const possibleEnemies = Object.keys(pokemonData).filter(name => {
        return pokemonData[name].level <= Math.ceil(gameState.level / 3);
    });
    
    // Generate random enemy units and distribute them in the enemy area (rows 0-2)
    for (let i = 0; i < enemyUnitCount; i++) {
        const randomPokemon = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
        
        // Distribute enemies across the enemy area (rows 0-2)
        const row = Math.floor(i / 3);
        const col = i % 8;
        
        const enemyUnit = { 
            ...pokemonData[randomPokemon],
            id: generateUniqueId(),
            currentHealth: pokemonData[randomPokemon].stats.health,
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
                // Attack animation
                animateAttack(unit, target);
                
                // Calculate damage
                const damage = unit.stats.attack;
                target.currentHealth -= damage;
                
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
function animateAttack(attacker, target) {
    // Get DOM elements
    const attackerCell = document.querySelector(`.cell[data-position="${attacker.position.row}-${attacker.position.col}"]`);
    const targetCell = document.querySelector(`.cell[data-position="${target.position.row}-${target.position.col}"]`);
    
    if (attackerCell && targetCell) {
        // Create attack animation element
        const attackAnimation = document.createElement('div');
        attackAnimation.className = `attack-animation type-${attacker.type}`;
        
        // Position the animation
        document.body.appendChild(attackAnimation);
        
        // Get positions for animation
        const attackerRect = attackerCell.getBoundingClientRect();
        const targetRect = targetCell.getBoundingClientRect();
        
        // Set start position
        attackAnimation.style.left = `${attackerRect.left + attackerRect.width/2}px`;
        attackAnimation.style.top = `${attackerRect.top + attackerRect.height/2}px`;
        
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
                
                // Remove hit effect after animation
                setTimeout(() => {
                    hitEffect.remove();
                }, 300);
                
                // Remove attack animation
                attackAnimation.remove();
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
        const goldReward = 5 + gameState.level;
        gameState.gold += goldReward;
        
        // Show victory message
        showBattleResult(`Victory! You earned ${goldReward} gold.`);
    } else {
        // Player lost - take damage
        const damage = Math.min(gameState.level + 2, 10);
        gameState.health -= damage;
        
        // Show defeat message
        showBattleResult(`Defeat! You lost ${damage} health.`);
        
        // Check game over
        if (gameState.health <= 0) {
            gameOver();
        }
    }
    
    // Reset board to pre-battle state
    renderBoard();
    updateStats();
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

// Game over
function gameOver() {
    // Show game over message
    const gameOverElement = document.createElement('div');
    gameOverElement.className = 'game-over';
    gameOverElement.innerHTML = `
        <h2>Game Over</h2>
        <p>You reached level ${gameState.level}</p>
        <button id="restart-game">Play Again</button>
    `;
    
    document.body.appendChild(gameOverElement);
    
    // Add restart button functionality
    document.getElementById('restart-game').addEventListener('click', () => {
        gameOverElement.remove();
        resetGame();
    });
    
    // Disable game controls
    startBattleButton.disabled = true;
    refreshShopButton.disabled = true;
    buyExpButton.disabled = true;
}

// Reset game to initial state
function resetGame() {
    // Reset game state
    gameState.gold = 10;
    gameState.health = 100;
    gameState.level = 1;
    gameState.maxBoardUnits = 3;
    gameState.bench = Array(9).fill(null);
    gameState.board = Array(6).fill().map(() => Array(8).fill(null));
    gameState.shop = Array(5).fill(null);
    gameState.selectedPokemon = null;
    gameState.draggedPokemon = null;
    gameState.dragSource = null;
    gameState.inBattle = false;
    gameState.enemyBoard = [];
    gameState.battleUnits = [];
    
    // Re-initialize game
    initGame();
    
    // Enable controls
    startBattleButton.disabled = false;
    refreshShopButton.disabled = false;
    buyExpButton.disabled = false;
}

// Count units on board
function countBoardUnits() {
    let count = 0;
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            if (gameState.board[row][col]) count++;
        }
    }
    return count;
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);