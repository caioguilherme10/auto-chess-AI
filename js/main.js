// Main JavaScript file that imports all modules and initializes the game

// Setup event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

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