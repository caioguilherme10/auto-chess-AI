// Damage calculation utility functions

/**
 * Calculate damage using the formula: Damage=([([(2*Level/5)+2]*Power*[A/D])/50]+2)*Critical*Type
 * 
 * @param {Object} attacker - The attacking Pokemon
 * @param {Object} defender - The defending Pokemon
 * @param {Object} move - The move being used
 * @param {boolean} isCritical - Whether the attack is a critical hit
 * @param {number} typeEffectiveness - The type effectiveness multiplier
 * @returns {number} - The calculated damage
 */
function calculateDamage(attacker, defender, move, isCritical = false, typeEffectiveness = 1) {
    // Map game level to formula level
    const levelMap = {
        1: 25, // Level 1 in game = Level 25 in formula
        2: 50, // Level 2 in game = Level 50 in formula
        3: 75  // Level 3 in game = Level 75 in formula
    };
    
    const level = levelMap[attacker.level] || 25;
    const power = move.power;
    
    // Determine which attack and defense stats to use based on move category
    let attackStat, defenseStat;
    
    if (move.damage_category === 'Physical') {
        attackStat = attacker.stats.physicalAttack || attacker.stats.attack;
        defenseStat = defender.stats.physicalDefense || defender.stats.attack;
    } else if (move.damage_category === 'Special') {
        attackStat = attacker.stats.specialAttack || attacker.stats.attack;
        defenseStat = defender.stats.specialDefense || defender.stats.attack;
    } else {
        // Default to physical if not specified
        attackStat = attacker.stats.physicalAttack || attacker.stats.attack;
        defenseStat = defender.stats.physicalDefense || defender.stats.attack;
    }
    
    // Critical hit multiplier (2 if critical, 1 if not)
    const criticalMultiplier = isCritical ? 2 : 1;
    
    // Calculate damage using the formula
    const baseDamage = (((2 * level / 5) + 2) * power * (attackStat / defenseStat)) / 50;
    const damage = Math.floor((baseDamage + 2) * criticalMultiplier * typeEffectiveness);
    
    return Math.max(1, damage); // Ensure at least 1 damage is dealt
}

/**
 * Calculate type effectiveness multiplier based on move type and defender type
 * 
 * @param {string} moveType - The type of the move
 * @param {string|Array} defenderType - The type(s) of the defending Pokemon
 * @returns {number} - The type effectiveness multiplier
 */
function calculateTypeEffectiveness(moveType, defenderType) {
    // Type effectiveness chart
    const typeChart = {
        'normal': {
            'rock': 0.5,
            'ghost': 0,
            'steel': 0.5
        },
        'fire': {
            'fire': 0.5,
            'water': 0.5,
            'grass': 2,
            'ice': 2,
            'bug': 2,
            'rock': 0.5,
            'dragon': 0.5,
            'steel': 2
        },
        'water': {
            'fire': 2,
            'water': 0.5,
            'grass': 0.5,
            'ground': 2,
            'rock': 2,
            'dragon': 0.5
        },
        'grass': {
            'fire': 0.5,
            'water': 2,
            'grass': 0.5,
            'poison': 0.5,
            'ground': 2,
            'flying': 0.5,
            'bug': 0.5,
            'rock': 2,
            'dragon': 0.5,
            'steel': 0.5
        },
        'electric': {
            'water': 2,
            'grass': 0.5,
            'electric': 0.5,
            'ground': 0,
            'flying': 2,
            'dragon': 0.5
        },
        'ice': {
            'fire': 0.5,
            'water': 0.5,
            'grass': 2,
            'ice': 0.5,
            'ground': 2,
            'flying': 2,
            'dragon': 2,
            'steel': 0.5
        },
        'fighting': {
            'normal': 2,
            'ice': 2,
            'poison': 0.5,
            'flying': 0.5,
            'psychic': 0.5,
            'bug': 0.5,
            'rock': 2,
            'ghost': 0,
            'dark': 2,
            'steel': 2
        },
        'poison': {
            'grass': 2,
            'poison': 0.5,
            'ground': 0.5,
            'rock': 0.5,
            'ghost': 0.5,
            'steel': 0
        },
        'ground': {
            'fire': 2,
            'electric': 2,
            'grass': 0.5,
            'poison': 2,
            'flying': 0,
            'bug': 0.5,
            'rock': 2,
            'steel': 2
        },
        'flying': {
            'grass': 2,
            'electric': 0.5,
            'fighting': 2,
            'bug': 2,
            'rock': 0.5,
            'steel': 0.5
        },
        'psychic': {
            'fighting': 2,
            'poison': 2,
            'psychic': 0.5,
            'dark': 0,
            'steel': 0.5
        },
        'bug': {
            'fire': 0.5,
            'grass': 2,
            'fighting': 0.5,
            'poison': 0.5,
            'flying': 0.5,
            'psychic': 2,
            'ghost': 0.5,
            'dark': 2,
            'steel': 0.5
        },
        'rock': {
            'fire': 2,
            'ice': 2,
            'fighting': 0.5,
            'ground': 0.5,
            'flying': 2,
            'bug': 2,
            'steel': 0.5
        },
        'ghost': {
            'normal': 0,
            'psychic': 2,
            'ghost': 2,
            'dark': 0.5,
            'steel': 0.5
        },
        'dragon': {
            'dragon': 2,
            'steel': 0.5
        },
        'dark': {
            'fighting': 0.5,
            'psychic': 2,
            'ghost': 2,
            'dark': 0.5,
            'steel': 0.5
        },
        'steel': {
            'fire': 0.5,
            'water': 0.5,
            'electric': 0.5,
            'ice': 2,
            'rock': 2,
            'steel': 0.5
        }
    };
    
    // If defender has multiple types, calculate the combined effectiveness
    if (Array.isArray(defenderType)) {
        let effectiveness = 1;
        defenderType.forEach(type => {
            if (typeChart[moveType] && typeChart[moveType][type]) {
                effectiveness *= typeChart[moveType][type];
            }
        });
        return effectiveness;
    } else {
        // Single type
        if (typeChart[moveType] && typeChart[moveType][defenderType]) {
            return typeChart[moveType][defenderType];
        }
    }
    
    // Default to normal effectiveness if not found
    return 1;
}

/**
 * Determine if an attack is a critical hit
 * 
 * @param {Object} attacker - The attacking Pokemon
 * @returns {boolean} - Whether the attack is a critical hit
 */
function isCriticalHit(attacker) {
    // Base critical hit rate (6.25%)
    const baseCritRate = 0.0625;
    
    // Speed can influence critical hit rate
    const speedFactor = attacker.stats.speed ? (attacker.stats.speed / 512) : 0;
    
    // Calculate final critical hit rate (capped at 25%)
    const critRate = Math.min(baseCritRate + speedFactor, 0.25);
    
    // Random roll to determine if critical hit
    return Math.random() < critRate;
}