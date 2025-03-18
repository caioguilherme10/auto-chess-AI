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
        
        // Create a container for stage and round info
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const stageDiv = document.createElement('div');
        stageDiv.className = 'stage';
        stageDiv.innerHTML = 'Stage: <span id="stage-amount">1</span>';
        progressContainer.appendChild(stageDiv);
        
        const roundDiv = document.createElement('div');
        roundDiv.className = 'round';
        roundDiv.innerHTML = 'Round: <span id="round-amount">1</span>/<span id="max-rounds">3</span>';
        progressContainer.appendChild(roundDiv);
        
        playerStats.appendChild(progressContainer);
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
    gameState.maxRounds = 3; // Stage 1 has 3 rounds
    
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
    
    // Append to game-container instead of body for proper positioning
    document.querySelector('.game-container').appendChild(gameOverElement);
    
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
    // Create and start confetti animation
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confetti = new Confetti();
    confetti.start(confettiCanvas);
    
    // Play victory sound (using browser's built-in audio API)
    const victorySound = new Audio('data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vm//Lm//GbZuDtj4YeLw3w8y8IBFcG9f9dgobm1vr24Zrb1+Oo5ezLCbCDWfe/0e4Bi18Bb4sDkQvGQeaaY//Z6+//+5Jfbs+OEzzLESvYD5YVDAPPVmvgdYzQsdKRQzUKzmKoGKFTF//Z');
    victorySound.play();
    
    // Calculate game statistics
    const totalPokemon = countBoardUnits() + gameState.bench.filter(p => p !== null).length;
    const gameScore = gameState.level * 100 + gameState.health * 5 + totalPokemon * 20;
    
    // Show victory message with enhanced styling and more stats
    const victoryElement = document.createElement('div');
    victoryElement.className = 'game-over victory'; // Reuse game-over styling with victory modifier
    victoryElement.innerHTML = `
        <h2>Victory!</h2>
        <p>🎉 Congratulations! You've completed all stages! 🎉</p>
        <p>⭐ Final level: ${gameState.level}</p>
        <p>❤️ Remaining health: ${gameState.health}</p>
        <p>🏆 Pokemon collected: ${totalPokemon}</p>
        <p>🌟 Final score: ${gameScore}</p>
        <button id="restart-game">Play Again</button>
    `;
    
    // Append to game-container instead of body for proper positioning
    document.querySelector('.game-container').appendChild(victoryElement);
    
    // Add restart button functionality
    document.getElementById('restart-game').addEventListener('click', () => {
        // Stop confetti animation
        confetti.stop();
        victoryElement.remove();
        resetGame();
    });
    
    // Disable game controls
    startBattleButton.disabled = true;
    refreshShopButton.disabled = true;
    buyExpButton.disabled = true;
    
    // Add event listener to stop confetti when window is resized
    window.addEventListener('resize', () => {
        confetti.stop();
        confetti.start(confettiCanvas);
    });
}

// Progress to next round or stage
function progressStage() {
    // Check if we've completed all rounds in the current stage
    if (gameState.round >= gameState.maxRounds) {
        // Move to next stage
        gameState.stage++;
        gameState.round = 1;
        
        // Set max rounds based on stage
        if (gameState.stage === 1) {
            gameState.maxRounds = 3; // Stage 1 has 3 rounds
        } else {
            gameState.maxRounds = 6; // All other stages have 6 rounds
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