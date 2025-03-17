// Drag and drop functionality

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
            const position = cell.dataset.position;
            if (!position) return; // Ensure position data exists
            
            const [targetRow, targetCol] = position.split('-').map(Number);
            
            // Validate row and column are within bounds
            if (targetRow < 0 || targetRow >= gameState.board.length || 
                targetCol < 0 || targetCol >= gameState.board[0].length) {
                return;
            }
            
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
                
                // Validate source position is within bounds
                if (sourceRow < 0 || sourceRow >= gameState.board.length || 
                    sourceCol < 0 || sourceCol >= gameState.board[0].length) {
                    return;
                }
                
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