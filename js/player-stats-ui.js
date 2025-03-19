// Player Stats UI Enhancement

// Update the player stats UI with animations and progress bars
function updatePlayerStatsUI() {
    // Get current values
    const currentGold = gameState.gold;
    const currentHealth = gameState.health;
    const currentLevel = gameState.level;
    const maxHealth = 100; // Maximum health value
    const maxLevel = 9; // Maximum player level
    
    // Update gold with animation if changed
    const goldElement = document.getElementById('gold-amount');
    if (parseInt(goldElement.textContent) !== currentGold) {
        // Add animation class
        goldElement.classList.add('gold-gain');
        goldElement.classList.add('stat-value-change');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            goldElement.classList.remove('gold-gain');
            goldElement.classList.remove('stat-value-change');
        }, 800);
        
        // Update text content
        goldElement.textContent = currentGold;
    }
    
    // Update health with animation if changed
    const healthElement = document.getElementById('health-amount');
    if (parseInt(healthElement.textContent) !== currentHealth) {
        // Check if health decreased
        if (parseInt(healthElement.textContent) > currentHealth) {
            healthElement.classList.add('health-loss');
        }
        
        healthElement.classList.add('stat-value-change');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            healthElement.classList.remove('health-loss');
            healthElement.classList.remove('stat-value-change');
        }, 800);
        
        // Update text content
        healthElement.textContent = currentHealth;
        
        // Update health progress bar
        const healthBar = document.querySelector('.health-bar');
        if (healthBar) {
            healthBar.style.width = `${(currentHealth / maxHealth) * 100}%`;
        }
    }
    
    // Update level with animation if changed
    const levelElement = document.getElementById('player-level');
    if (parseInt(levelElement.textContent) !== currentLevel) {
        // Add animation class
        levelElement.classList.add('level-up');
        levelElement.classList.add('stat-value-change');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            levelElement.classList.remove('level-up');
            levelElement.classList.remove('stat-value-change');
        }, 1000);
        
        // Update text content
        levelElement.textContent = currentLevel;
        
        // Update level progress bar
        const levelBar = document.querySelector('.level-bar');
        if (levelBar) {
            levelBar.style.width = `${(currentLevel / maxLevel) * 100}%`;
        }
    }
}

// Override the original updateStats function to include UI enhancements
const originalUpdateStats = updateStats;
function enhancedUpdateStats() {
    // Call the original function first
    originalUpdateStats();
    
    // Then apply our UI enhancements
    updatePlayerStatsUI();
}

// Replace the original updateStats function with our enhanced version
updateStats = enhancedUpdateStats;

// Initialize the progress bars on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial progress bar values
    const healthBar = document.querySelector('.health-bar');
    const levelBar = document.querySelector('.level-bar');
    
    if (healthBar) {
        healthBar.style.width = `${(gameState.health / 100) * 100}%`;
    }
    
    if (levelBar) {
        levelBar.style.width = `${(gameState.level / 9) * 100}%`;
    }
});