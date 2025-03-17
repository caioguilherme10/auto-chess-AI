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
    battleUnits: [],
    stage: 1, // Current stage (1-7)
    round: 1, // Current round within the stage
    maxRounds: 3 // Number of rounds per stage (increases with stage)
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
let stageElement;
let roundElement;

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
    
    // Create stage and round elements if they don't exist
    if (!document.getElementById('stage-amount')) {
        const playerStats = document.querySelector('.player-stats');
        const stageDiv = document.createElement('div');
        stageDiv.className = 'stage';
        stageDiv.innerHTML = 'Stage: <span id="stage-amount">1</span>';
        playerStats.appendChild(stageDiv);
        
        const roundDiv = document.createElement('div');
        roundDiv.className = 'round';
        roundDiv.innerHTML = 'Round: <span id="round-amount">1</span>/<span id="max-rounds">3</span>';
        playerStats.appendChild(roundDiv);
    }
    
    stageElement = document.getElementById('stage-amount');
    roundElement = document.getElementById('round-amount');
    maxRoundsElement = document.getElementById('max-rounds');
    
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
    
    // Update stage and round display
    if (stageElement) stageElement.textContent = gameState.stage;
    if (roundElement) roundElement.textContent = gameState.round;
    if (maxRoundsElement) maxRoundsElement.textContent = gameState.maxRounds;
    
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
    gameState.stage = 1;
    gameState.round = 1;
    gameState.maxRounds = 3;
    
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
        <p>You reached stage ${gameState.stage}, round ${gameState.round}</p>
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

// Show victory screen when player completes all stages
function showVictory() {
    // Show victory message
    const victoryElement = document.createElement('div');
    victoryElement.className = 'game-over victory'; // Reuse game-over styling with victory modifier
    victoryElement.innerHTML = `
        <h2>Victory!</h2>
        <p>Congratulations! You've completed all stages!</p>
        <p>Final level: ${gameState.level}</p>
        <p>Remaining health: ${gameState.health}</p>
        <button id="restart-game">Play Again</button>
    `;
    
    document.body.appendChild(victoryElement);
    
    // Add restart button functionality
    document.getElementById('restart-game').addEventListener('click', () => {
        victoryElement.remove();
        resetGame();
    });
    
    // Disable game controls
    startBattleButton.disabled = true;
    refreshShopButton.disabled = true;
    buyExpButton.disabled = true;
}

// Progress to next round or stage
function progressStage() {
    // Check if we've completed all rounds in the current stage
    if (gameState.round >= gameState.maxRounds) {
        // Move to next stage
        gameState.stage++;
        gameState.round = 1;
        
        // Increase max rounds for higher stages
        if (gameState.stage <= 3) {
            gameState.maxRounds = 3;
        } else if (gameState.stage <= 5) {
            gameState.maxRounds = 4;
        } else {
            gameState.maxRounds = 5;
        }
        
        // Give stage completion bonus
        const stageBonus = 5 + (gameState.stage * 2);
        gameState.gold += stageBonus;
        
        // Show stage completion message
        showBattleResult(`Stage ${gameState.stage-1} completed! +${stageBonus} gold bonus.`);
        
        // Check for game victory (completed stage 7)
        if (gameState.stage > 7) {
            showVictory();
            return;
        }
    } else {
        // Move to next round in current stage
        gameState.round++;
    }
    
    updateStats();
}