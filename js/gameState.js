// Game state and initialization

// Game state object
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
let goldElement;
let healthElement;
let levelElement;
let battleBoard;
let playerBench;
let pokemonShop;
let pokemonInfo;
let refreshShopButton;
let buyExpButton;
let startBattleButton;
let evolutionAnimation;
let preEvolutionImg;
let postEvolutionImg;

// Initialize the game
function initGame() {
    // Initialize DOM elements
    goldElement = document.getElementById('gold-amount');
    healthElement = document.getElementById('health-amount');
    levelElement = document.getElementById('player-level');
    battleBoard = document.getElementById('battle-board');
    playerBench = document.getElementById('player-bench');
    pokemonShop = document.getElementById('pokemon-shop');
    pokemonInfo = document.getElementById('pokemon-info');
    refreshShopButton = document.getElementById('refresh-shop');
    buyExpButton = document.getElementById('buy-exp');
    startBattleButton = document.getElementById('start-battle');
    evolutionAnimation = document.getElementById('evolution-animation');
    preEvolutionImg = document.getElementById('pre-evolution');
    postEvolutionImg = document.getElementById('post-evolution');
    
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