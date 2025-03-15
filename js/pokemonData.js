// Pokemon data with their evolution chains and stats
// Damage calculation formula: Damage=([([(2*Level/5)+2]*Power*[A/D])/50]+2)*Critical*Type
// Level mapping: Level 1 = 25, Level 2 = 50, Level 3 = 75 in the damage formula
const pokemonData = {
    // Base Pokemon (Level 1)
    'Bulbasaur': {
        name: 'Bulbasaur',
        type: ['grass', 'poison'],
        level: 1,
        evolution: 'Ivysaur',
        cost: 1,
        stats: {
            health: 81,
            physicalAttack: 53,
            physicalDefense: 53,
            specialAttack: 61,
            specialDefense: 61,
            speed: 51,
            attack: 15, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
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
            health: 78,
            physicalAttack: 54.5,
            physicalDefense: 50,
            specialAttack: 58.5,
            specialDefense: 53.5,
            speed: 61,
            attack: 20, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'electric', 'psychic', 'flying', 'ghost', 'dragon', 'dark', 'fighting'],
            weak: ['ground', 'rock', 'water'],
            superWeak: [],
            resistant: ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Charmander_Front.png',
            back: 'image/Charmander_Back.png'
        },
        moves: [
            {
                name: 'Scratch',
                type: 'normal',
                damage_category: 'Physical',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Ember',
                type: 'fire',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Squirtle': {
        name: 'Squirtle',
        type: 'water',
        level: 1,
        evolution: 'Wartortle',
        cost: 1,
        stats: {
            health: 80.5,
            physicalAttack: 52.5,
            physicalDefense: 61,
            specialAttack: 53.5,
            specialDefense: 60.5,
            speed: 50,
            attack: 12, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'bug', 'ground', 'rock', 'poison', 'psychic', 'fairy', 'flying', 'ghost', 'dragon', 'dark', 'fighting'],
            weak: ['grass', 'electric'],
            superWeak: [],
            resistant: ['steel', 'fire', 'ice', 'water'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Squirtle_Front.png',
            back: 'image/Squirtle_Back.png'
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
                name: 'Water Gun',
                type: 'water',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Caterpie': {
        name: 'Caterpie',
        type: 'bug',
        level: 1,
        evolution: 'Metapod',
        cost: 1,
        stats: {
            health: 81,
            physicalAttack: 43.5,
            physicalDefense: 46,
            specialAttack: 38.5,
            specialDefense: 38.5,
            speed: 51,
            attack: 10, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'steel', 'ice', 'water', 'bug', 'poison', 'psychic', 'fairy', 'electric', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'rock', 'flying'],
            superWeak: [],
            resistant: ['grass', 'ground', 'fighting'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Caterpie_Front.png',
            back: 'image/Caterpie_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Weedle': {
        name: 'Weedle',
        type: ['bug', 'poison'],
        level: 1,
        evolution: 'Kakuna',
        cost: 1,
        stats: {
            health: 78.5,
            physicalAttack: 46,
            physicalDefense: 43.5,
            specialAttack: 38.5,
            specialDefense: 38.5,
            speed: 53.5,
            attack: 12, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'steel', 'ice', 'water', 'electric', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'rock', 'flying', 'psychic'],
            superWeak: [],
            resistant: ['poison', 'bug', 'fairy'],
            superResistant: ['fighting', 'grass'],
            immune: []
        },
        image: {
            front: 'image/Weedle_Front.png',
            back: 'image/Weedle_Back.png'
        },
        moves: [
            {
                name: 'Poison Sting',
                type: 'poison',
                damage_category: 'Physical',
                power: 15,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Pidgey': {
        name: 'Pidgey',
        type: ['normal', 'flying'],
        level: 1,
        evolution: 'Pidgeotto',
        cost: 1,
        stats: {
            health: 78.5,
            physicalAttack: 51,
            physicalDefense: 48.5,
            specialAttack: 46,
            specialDefense: 46,
            speed: 56.5,
            attack: 14, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'flying', 'fighting', 'poison', 'steel', 'psychic', 'water', 'dragon', 'dark', 'fairy'],
            weak: ['rock', 'electric', 'ice'],
            superWeak: [],
            resistant: ['bug', 'grass'],
            superResistant: [],
            immune: ['ground', 'ghost']
        },
        image: {
            front: 'image/Pidgey_Front.png',
            back: 'image/Pidgey_Back.png'
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
                name: 'Gust',
                type: 'flying',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Dratini evolution line
    'Dratini': {
        name: 'Dratini',
        type: 'dragon',
        level: 1,
        evolution: 'Dragonair',
        cost: 1,
        stats: {
            health: 79,
            physicalAttack: 60.5,
            physicalDefense: 51,
            specialAttack: 53.5,
            specialDefense: 53.5,
            speed: 53.5,
            attack: 18, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['flying', 'normal', 'fighting', 'ground', 'bug', 'poison', 'dark', 'psychic', 'ghost', 'steel', 'rock'],
            weak: ['dragon', 'fairy', 'ice'],
            superWeak: [],
            resistant: ['fire', 'electric', 'water', 'grass'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Dratini_Front.png',
            back: 'image/Dratini_Back.png'
        },
        moves: [
            {
                name: 'Twister',
                type: 'dragon',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Slam',
                type: 'normal',
                damage_category: 'Physical',
                power: 80,
                accuracy: 75,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Gastly evolution line
    'Gastly': {
        name: 'Gastly',
        type: ['ghost', 'poison'],
        level: 1,
        evolution: 'Haunter',
        cost: 1,
        stats: {
            health: 73.5,
            physicalAttack: 46,
            physicalDefense: 43.5,
            specialAttack: 78.5,
            specialDefense: 46,
            speed: 68.5,
            attack: 22, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: [ 'fire', 'flying', 'steel', 'water', 'dragon', 'rock', 'electric', 'ice'],
            weak: ['dark', 'psychic', 'ghost'],
            superWeak: [],
            resistant: ['fairy', 'grass'],
            superResistant: ['bug', 'poison'],
            immune: ['normal', 'fighting', 'ground']
        },
        image: {
            front: 'image/Gastly_Front.png',
            back: 'image/Gastly_Back.png'
        },
        moves: [
            {
                name: 'Lick',
                type: 'ghost',
                damage_category: 'Physical',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Sucker Punch',
                type: 'dark',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Geodude evolution line
    'Geodude': {
        name: 'Geodude',
        type: ['rock', 'ground'],
        level: 1,
        evolution: 'Graveler',
        cost: 1,
        stats: {
            health: 78.5,
            physicalAttack: 68.5,
            physicalDefense: 78.5,
            specialAttack: 43.5,
            specialDefense: 43.5,
            speed: 38.5,
            attack: 16, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['fairy', 'bug', 'ghost', 'psychic', 'dragon', 'dark'],
            weak: ['ground', 'fighting', 'steel', 'ice'],
            superWeak: ['grass', 'water'],
            resistant: ['normal', 'flying', 'fire', 'rock'],
            superResistant: ['poison'],
            immune: ['electric']
        },
        image: {
            front: 'image/Geodude_Front.png',
            back: 'image/Geodude_Back.png'
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
                name: 'Rock Throw',
                type: 'rock',
                damage_category: 'Physical',
                power: 50,
                accuracy: 90,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Bellsprout evolution line
    'Bellsprout': {
        name: 'Bellsprout',
        type: ['grass', 'poison'],
        level: 1,
        evolution: 'Weepinbell',
        cost: 1,
        stats: {
            health: 83.5,
            physicalAttack: 66,
            physicalDefense: 46,
            specialAttack: 63.5,
            specialDefense: 43.5,
            speed: 48.5,
            attack: 17, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Bellsprout_Front.png',
            back: 'image/Bellsprout_Back.png'
        },
        moves: [
            {
                name: 'Vine Whip',
                type: 'grass',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Wrap',
                type: 'normal',
                damage_category: 'Physical',
                power: 15,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Machop evolution line
    'Machop': {
        name: 'Machop',
        type: 'fighting',
        level: 1,
        evolution: 'Machoke',
        cost: 1,
        stats: {
            health: 93.5,
            physicalAttack: 68.5,
            physicalDefense: 53.5,
            specialAttack: 46,
            specialDefense: 46,
            speed: 46,
            attack: 21, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'ghost', 'water', 'fighting', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'poison', 'dragon'],
            weak: ['psychic', 'fairy', 'flying'],
            superWeak: [],
            resistant: ['rock', 'bug', 'dark'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Machop_Front.png',
            back: 'image/Machop_Back.png'
        },
        moves: [
            {
                name: 'Karate Chop',
                type: 'fighting',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Low Sweep',
                type: 'fighting',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Abra evolution line
    'Abra': {
        name: 'Abra',
        type: 'psychic',
        level: 1,
        evolution: 'Kadabra',
        cost: 1,
        stats: {
            health: 71,
            physicalAttack: 38.5,
            physicalDefense: 36,
            specialAttack: 81,
            specialDefense: 56,
            speed: 73.5,
            attack: 25, // Keeping original stat for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'fairy', 'flying', 'water', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'rock', 'poison', 'dragon'],
            weak: ['bug', 'ghost', 'dark'],
            superWeak: [],
            resistant: ['psychic', 'fighting'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Abra_Front.png',
            back: 'image/Abra_Back.png'
        },
        moves: [
            {
                name: 'Thief',
                type: 'dark',
                damage_category: 'Physical',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    // New Pokemon - Poliwag evolution line
    'Poliwag': {
        name: 'Poliwag',
        type: 'water',
        level: 1,
        evolution: 'Poliwhirl',
        cost: 1,
        stats: {
            health: 78.5,
            physicalAttack: 53.5,
            physicalDefense: 48.5,
            specialAttack: 48.5,
            specialDefense: 48.5,
            speed: 73.5,
            attack: 14, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fairy', 'flying', 'psychic', 'fighting', 'ground', 'rock', 'bug', 'ghost', 'poison', 'dragon', 'dark'],
            weak: ['electric', 'grass'],
            superWeak: [],
            resistant: ['water', 'ice', 'steel', 'fire'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Poliwag_Front.png',
            back: 'image/Poliwag_Back.png'
        },
        moves: [
            {
                name: 'Bubble',
                type: 'water',
                damage_category: 'Special',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Water Gun',
                type: 'water',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Oddish evolution line
    'Oddish': {
        name: 'Oddish',
        type: ['grass', 'poison'],
        level: 1,
        evolution: 'Gloom',
        cost: 1,
        stats: {
            health: 81,
            physicalAttack: 53.5,
            physicalDefense: 56,
            specialAttack: 66,
            specialDefense: 61,
            speed: 43.5,
            attack: 16, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'rock', 'bug', 'ghost', 'steel', 'poison', 'dragon', 'dark'],
            weak: ['fire', 'flying', 'ice', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Oddish_Front.png',
            back: 'image/Oddish_Back.png'
        },
        moves: [
            {
                name: 'Absorb',
                type: 'grass',
                damage_category: 'Special',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Acid',
                type: 'poison',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - NidoranM evolution line
    'NidoranM': {
        name: 'NidoranM',
        type: 'poison',
        level: 1,
        evolution: 'Nidorino',
        cost: 1,
        stats: {
            health: 81.5,
            physicalAttack: 57,
            physicalDefense: 48.5,
            specialAttack: 48.5,
            specialDefense: 48.5,
            speed: 53.5,
            attack: 19, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'rock', 'electric', 'ghost', 'flying', 'steel', 'ice', 'water', 'dragon', 'dark'],
            weak: ['ground', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/NidoranM_Front.png',
            back: 'image/NidoranM_Back.png'
        },
        moves: [
            {
                name: 'Peck',
                type: 'flying',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double Kick',
                type: 'fighting',
                damage_category: 'Physical',
                power: 30,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - NidoranF evolution line
    'NidoranF': {
        name: 'NidoranF',
        type: 'poison',
        level: 1,
        evolution: 'Nidorina',
        cost: 1,
        stats: {
            health: 86,
            physicalAttack: 52,
            physicalDefense: 54.5,
            specialAttack: 48.5,
            specialDefense: 48.5,
            speed: 49,
            attack: 17, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'rock', 'electric', 'ghost', 'flying', 'steel', 'ice', 'water', 'dragon', 'dark'],
            weak: ['ground', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/NidoranF_Front.png',
            back: 'image/NidoranF_Back.png'
        },
        moves: [
            {
                name: 'Scratch',
                type: 'normal',
                damage_category: 'Physical',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double Kick',
                type: 'fighting',
                damage_category: 'Physical',
                power: 30,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    
    // Level 2 Evolutions
    'Ivysaur': {
        name: 'Ivysaur',
        type: ['grass', 'poison'],
        level: 2,
        evolution: 'Venusaur',
        stats: {
            health: 167,
            physicalAttack: 114,
            physicalDefense: 115,
            specialAttack: 132,
            specialDefense: 132,
            speed: 112,
            attack: 30, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Ivysaur_Front.png',
            back: 'image/Ivysaur_Back.png'
        },
        moves: [
            {
                name: 'Take Down',
                type: 'normal',
                damage_category: 'Physical',
                power: 90,
                accuracy: 85,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Razor Leaf',
                type: 'grass',
                damage_category: 'Physical',
                power: 55,
                accuracy: 95,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charmeleon': {
        name: 'Charmeleon',
        type: 'fire',
        level: 2,
        evolution: 'Charizard',
        stats: {
            health: 165,
            physicalAttack: 116,
            physicalDefense: 110,
            specialAttack: 132,
            specialDefense: 117,
            speed: 132,
            attack: 40, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'electric', 'psychic', 'flying', 'ghost', 'dragon', 'dark', 'fighting'],
            weak: ['ground', 'rock', 'water'],
            superWeak: [],
            resistant: ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Charmeleon_Front.png',
            back: 'image/Charmeleon_Back.png'
        },
        moves: [
            {
                name: 'Fire Fang',
                type: 'fire',
                damage_category: 'Physical',
                power: 65,
                accuracy: 95,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Flame Burst',
                type: 'fire',
                damage_category: 'Special',
                power: 70,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Wartortle': {
        name: 'Wartortle',
        type: 'water',
        level: 2,
        evolution: 'Blastoise',
        stats: {
            health: 166,
            physicalAttack: 115,
            physicalDefense: 132,
            specialAttack: 117,
            specialDefense: 132,
            speed: 110,
            attack: 24, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'bug', 'ground', 'rock', 'poison', 'psychic', 'fairy', 'flying', 'ghost', 'dragon', 'dark', 'fighting'],
            weak: ['grass', 'electric'],
            superWeak: [],
            resistant: ['steel', 'fire', 'ice', 'water'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Wartortle_Front.png',
            back: 'image/Wartortle_Back.png'
        },
        moves: [
            {
                name: 'Bite',
                type: 'dark',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Water Pulse',
                type: 'water',
                damage_category: 'Special',
                power: 60,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Metapod': {
        name: 'Metapod',
        type: 'bug',
        level: 2,
        evolution: 'Butterfree',
        stats: {
            health: 157,
            physicalAttack: 72,
            physicalDefense: 107,
            specialAttack: 77,
            specialDefense: 77,
            speed: 82,
            attack: 20, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'steel', 'ice', 'water', 'bug', 'poison', 'psychic', 'fairy', 'electric', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'rock', 'flying'],
            superWeak: [],
            resistant: ['grass', 'ground', 'fighting'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Metapod_Front.png',
            back: 'image/Metapod_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Kakuna': {
        name: 'Kakuna',
        type: ['bug', 'poison'],
        level: 2,
        evolution: 'Beedrill',
        stats: {
            health: 152,
            physicalAttack: 77,
            physicalDefense: 102,
            specialAttack: 77,
            specialDefense: 77,
            speed: 87,
            attack: 24, // Keeping original stat for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'steel', 'ice', 'water', 'electric', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'rock', 'flying', 'psychic'],
            superWeak: [],
            resistant: ['poison', 'bug', 'fairy'],
            superResistant: ['fighting', 'grass'],
            immune: []
        },
        image: {
            front: 'image/Kakuna_Front.png',
            back: 'image/Kakuna_Back.png'
        },
        moves: [
            {
                name: 'Poison Sting',
                type: 'poison',
                damage_category: 'Physical',
                power: 15,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Pidgeotto': {
        name: 'Pidgeotto',
        type: ['normal', 'flying'],
        level: 2,
        evolution: 'Pidgeot',
        stats: {
            health: 170,
            physicalAttack: 112,
            physicalDefense: 107,
            specialAttack: 102,
            specialDefense: 102,
            speed: 123,
            attack: 28, // Keeping original stat for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'flying', 'fighting', 'poison', 'steel', 'psychic', 'water', 'dragon', 'dark', 'fairy'],
            weak: ['rock', 'electric', 'ice'],
            superWeak: [],
            resistant: ['bug', 'grass'],
            superResistant: [],
            immune: ['ground', 'ghost']
        },
        image: {
            front: 'image/Pidgeotto_Front.png',
            back: 'image/Pidgeotto_Back.png'
        },
        moves: [
            {
                name: 'Wing Attack',
                type: 'flying',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Twister',
                type: 'dragon',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Level 2 Evolutions
    'Dragonair': {
        name: 'Dragonair',
        type: 'dragon',
        level: 2,
        evolution: 'Dragonite',
        stats: {
            health: 168,
            physicalAttack: 136,
            physicalDefense: 117,
            specialAttack: 122,
            specialDefense: 122,
            speed: 122,
            attack: 36, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['flying', 'normal', 'fighting', 'ground', 'bug', 'poison', 'dark', 'psychic', 'ghost', 'steel', 'rock'],
            weak: ['dragon', 'fairy', 'ice'],
            superWeak: [],
            resistant: ['fire', 'electric', 'water', 'grass'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Dragonair_Front.png',
            back: 'image/Dragonair_Back.png'
        },
        moves: [
            {
                name: 'Dragon Tail',
                type: 'dragon',
                damage_category: 'Physical',
                power: 60,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Aqua Tail',
                type: 'water',
                damage_category: 'Physical',
                power: 90,
                accuracy: 90,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Haunter': {
        name: 'Haunter',
        type: ['ghost', 'poison'],
        level: 2,
        evolution: 'Gengar',
        stats: {
            health: 152,
            physicalAttack: 102,
            physicalDefense: 97,
            specialAttack: 167,
            specialDefense: 107,
            speed: 147,
            attack: 44, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: [ 'fire', 'flying', 'steel', 'water', 'dragon', 'rock', 'electric', 'ice'],
            weak: ['dark', 'psychic', 'ghost'],
            superWeak: [],
            resistant: ['fairy', 'grass'],
            superResistant: ['bug', 'poison'],
            immune: ['normal', 'fighting', 'ground']
        },
        image: {
            front: 'image/Haunter_Front.png',
            back: 'image/Haunter_Back.png'
        },
        moves: [
            {
                name: 'Sucker Punch',
                type: 'dark',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Shadow Ball',
                type: 'ghost',
                damage_category: 'Special',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Graveler': {
        name: 'Graveler',
        type: ['rock', 'ground'],
        level: 2,
        evolution: 'Golem',
        stats: {
            health: 162,
            physicalAttack: 147,
            physicalDefense: 167,
            specialAttack: 97,
            specialDefense: 97,
            speed: 87,
            attack: 32, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['fairy', 'bug', 'ghost', 'psychic', 'dragon', 'dark'],
            weak: ['ground', 'fighting', 'steel', 'ice'],
            superWeak: ['grass', 'water'],
            resistant: ['normal', 'flying', 'fire', 'rock'],
            superResistant: ['poison'],
            immune: ['electric']
        },
        image: {
            front: 'image/Graveler_Front.png',
            back: 'image/Graveler_Back.png'
        },
        moves: [
            {
                name: 'Smack Down',
                type: 'rock',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Bulldoze',
                type: 'ground',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Weepinbell': {
        name: 'Weepinbell',
        type: ['grass', 'poison'],
        level: 2,
        evolution: 'Victreebel',
        stats: {
            health: 172,
            physicalAttack: 142,
            physicalDefense: 102,
            specialAttack: 137,
            specialDefense: 97,
            speed: 107,
            attack: 34, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Weepinbell_Front.png',
            back: 'image/Weepinbell_Back.png'
        },
        moves: [
            {
                name: 'Acid',
                type: 'poison',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Knock Off',
                type: 'dark',
                damage_category: 'Physical',
                power: 20,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Machoke': {
        name: 'Machoke',
        type: 'fighting',
        level: 2,
        evolution: 'Machamp',
        stats: {
            health: 187,
            physicalAttack: 152,
            physicalDefense: 122,
            specialAttack: 102,
            specialDefense: 112,
            speed: 97,
            attack: 42, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'ghost', 'water', 'fighting', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'poison', 'dragon'],
            weak: ['psychic', 'fairy', 'flying'],
            superWeak: [],
            resistant: ['rock', 'bug', 'dark'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Machoke_Front.png',
            back: 'image/Machoke_Back.png'
        },
        moves: [
            {
                name: 'Revenge',
                type: 'fighting',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Submission',
                type: 'fighting',
                damage_category: 'Physical',
                power: 80,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Kadabra': {
        name: 'Kadabra',
        type: 'psychic',
        level: 2,
        evolution: 'Alakazam',
        stats: {
            health: 147,
            physicalAttack: 87,
            physicalDefense: 82,
            specialAttack: 172,
            specialDefense: 122,
            speed: 157,
            attack: 50, // Keeping original attack for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'fairy', 'flying', 'water', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'rock', 'poison', 'dragon'],
            weak: ['bug', 'ghost', 'dark'],
            superWeak: [],
            resistant: ['psychic', 'fighting'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Kadabra_Front.png',
            back: 'image/Kadabra_Back.png'
        },
        moves: [
            {
                name: 'Confusion',
                type: 'psychic',
                damage_category: 'Special',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Psybeam',
                type: 'psychic',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Poliwhirl': {
        name: 'Poliwhirl',
        type: 'water',
        level: 2,
        evolution: 'Poliwrath',
        stats: {
            health: 172,
            physicalAttack: 117,
            physicalDefense: 117,
            specialAttack: 102,
            specialDefense: 102,
            speed: 142,
            attack: 28, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fairy', 'flying', 'psychic', 'fighting', 'ground', 'rock', 'bug', 'ghost', 'poison', 'dragon', 'dark'],
            weak: ['electric', 'grass'],
            superWeak: [],
            resistant: ['water', 'ice', 'steel', 'fire'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Poliwhirl_Front.png',
            back: 'image/Poliwhirl_Back.png'
        },
        moves: [
            {
                name: 'Body Slam',
                type: 'normal',
                damage_category: 'Physical',
                power: 85,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'BubbleBeam',
                type: 'water',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Gloom': {
        name: 'Gloom',
        type: ['grass', 'poison'],
        level: 2,
        evolution: 'Vileplume',
        stats: {
            health: 167,
            physicalAttack: 117,
            physicalDefense: 122,
            specialAttack: 137,
            specialDefense: 127,
            speed: 92,
            attack: 32, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'rock', 'bug', 'ghost', 'steel', 'poison', 'dragon', 'dark'],
            weak: ['fire', 'flying', 'ice', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Gloom_Front.png',
            back: 'image/Gloom_Back.png'
        },
        moves: [
            {
                name: 'Mega Drain',
                type: 'grass',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Venoshock',
                type: 'poison',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidorino': {
        name: 'Nidorino',
        type: 'poison',
        level: 2,
        evolution: 'Nidoking',
        stats: {
            health: 168,
            physicalAttack: 124,
            physicalDefense: 109,
            specialAttack: 107,
            specialDefense: 107,
            speed: 117,
            attack: 38, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'rock', 'electric', 'ghost', 'flying', 'steel', 'ice', 'water', 'dragon', 'dark'],
            weak: ['ground', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Nidorino_Front.png',
            back: 'image/Nidorino_Back.png'
        },
        moves: [
            {
                name: 'Horn Attack',
                type: 'normal',
                damage_category: 'Physical',
                power: 65,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cut',
                type: 'normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 95,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidorina': {
        name: 'Nidorina',
        type: 'poison',
        level: 2,
        evolution: 'Nidoqueen',
        stats: {
            health: 177,
            physicalAttack: 114,
            physicalDefense: 119,
            specialAttack: 107,
            specialDefense: 107,
            speed: 108,
            attack: 34, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'rock', 'electric', 'ghost', 'flying', 'steel', 'ice', 'water', 'dragon', 'dark'],
            weak: ['ground', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Nidorina_Front.png',
            back: 'image/Nidorina_Back.png'
        },
        moves: [
            {
                name: 'Bite',
                type: 'dark',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cut',
                type: 'normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 95,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    
    // Level 3 Evolutions
    'Venusaur': {
        name: 'Venusaur',
        type: ['grass', 'poison'],
        level: 3,
        stats: {
            health: 275.5,
            physicalAttack: 198.5,
            physicalDefense: 200,
            specialAttack: 225.5,
            specialDefense: 225.5,
            speed: 195.5,
            attack: 60, // Keeping original attack for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Venusaur_Front.png',
            back: 'image/Venusaur_Back.png'
        },
        moves: [
            {
                name: 'Double-Edge',
                type: 'normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Petal Dance',
                type: 'grass',
                damage_category: 'Special',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charizard': {
        name: 'Charizard',
        type: ['fire', 'flying'],
        level: 3,
        stats: {
            health: 272.5,
            physicalAttack: 201.5,
            physicalDefense: 192.5,
            specialAttack: 239,
            specialDefense: 203,
            speed: 225.5,
            attack: 80, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'flying', 'psychic', 'ice', 'ground', 'ghost', 'dragon', 'dark'],
            weak: ['water', 'electric'],
            superWeak: ['rock'],
            resistant: ['fire', 'steel', 'fighting', 'fairy'],
            superResistant: ['grass', 'bug'],
            immune: []
        },
        image: {
            front: 'image/Charizard_Front.png',
            back: 'image/Charizard_Back.png'
        },
        moves: [
            {
                name: 'Flamethrower',
                type: 'fire',
                damage_category: 'Special',
                power: 95,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Heat Wave',
                type: 'fire',
                damage_category: 'Special',
                power: 100,
                accuracy: 90,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Blastoise': {
        name: 'Blastoise',
        type: 'water',
        level: 3,
        stats: {
            health: 274,
            physicalAttack: 200,
            physicalDefense: 225.5,
            specialAttack: 203,
            specialDefense: 233,
            speed: 192.5,
            attack: 48, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'bug', 'ground', 'rock', 'poison', 'psychic', 'fairy', 'flying', 'ghost', 'dragon', 'dark', 'fighting'],
            weak: ['grass', 'electric'],
            superWeak: [],
            resistant: ['steel', 'fire', 'ice', 'water'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Blastoise_Front.png',
            back: 'image/Blastoise_Back.png'
        },
        moves: [
            {
                name: 'Aqua Tail',
                type: 'water',
                damage_category: 'Physical',
                power: 90,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Hydro Pump',
                type: 'water',
                damage_category: 'Special',
                power: 120,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Butterfree': {
        name: 'Butterfree',
        type: ['bug', 'flying'],
        level: 3,
        stats: {
            health: 245.5,
            physicalAttack: 143,
            physicalDefense: 150.5,
            specialAttack: 210.5,
            specialDefense: 195.5,
            speed: 180.5,
            attack: 40, // Keeping original attack for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'steel', 'water', 'poison', 'psychic', 'fairy', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'flying', 'ice', 'electric'],
            superWeak: ['rock'],
            resistant: ['bug'],
            superResistant: ['grass', 'fighting'],
            immune: ['ground']
        },
        image: {
            front: 'image/Butterfree_Front.png',
            back: 'image/Butterfree_Back.png'
        },
        moves: [
            {
                name: 'Psybeam',
                type: 'psychic',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Bug Buzz',
                type: 'bug',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Beedrill': {
        name: 'Beedrill',
        type: ['bug', 'poison'],
        level: 3,
        stats: {
            health: 253,
            physicalAttack: 210.5,
            physicalDefense: 135.5,
            specialAttack: 143,
            specialDefense: 195.5,
            speed: 188,
            attack: 48, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'steel', 'ice', 'water', 'electric', 'ghost', 'dragon', 'dark'],
            weak: ['fire', 'rock', 'flying', 'psychic'],
            superWeak: [],
            resistant: ['poison', 'bug', 'fairy'],
            superResistant: ['fighting', 'grass'],
            immune: []
        },
        image: {
            front: 'image/Beedrill_Front.png',
            back: 'image/Beedrill_Back.png'
        },
        moves: [
            {
                name: 'X-Scissor',
                type: 'bug',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Poison Jab',
                type: 'poison',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Pidgeot': {
        name: 'Pidgeot',
        type: ['normal', 'flying'],
        level: 3,
        stats: {
            health: 280,
            physicalAttack: 195.5,
            physicalDefense: 188,
            specialAttack: 180.5,
            specialDefense: 180.5,
            speed: 227,
            attack: 56, // Keeping original attack for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'flying', 'fighting', 'poison', 'steel', 'psychic', 'water', 'dragon', 'dark', 'fairy'],
            weak: ['rock', 'electric', 'ice'],
            superWeak: [],
            resistant: ['bug', 'grass'],
            superResistant: [],
            immune: ['ground', 'ghost']
        },
        image: {
            front: 'image/Pidgeot_Front.png',
            back: 'image/Pidgeot_Back.png'
        },
        moves: [
            {
                name: 'Fly',
                type: 'flying',
                damage_category: 'Physical',
                power: 90,
                accuracy: 95,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Hurricane',
                type: 'flying',
                damage_category: 'Special',
                power: 120,
                accuracy: 70,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    // New Pokemon - Level 3 Evolutions
    'Dragonite': {
        name: 'Dragonite',
        type: ['dragon', 'flying'],
        level: 3,
        stats: {
            health: 292,
            physicalAttack: 276.5,
            physicalDefense: 218,
            specialAttack: 225.5,
            specialDefense: 225.5,
            speed: 195.5,
            attack: 72, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['flying', 'electric', 'normal', 'ground', 'poison', 'dark', 'psychic', 'ghost', 'steel'],
            weak: ['dragon', 'fairy', 'rock'],
            superWeak: ['ice'],
            resistant: ['fire', 'fighting', 'bug', 'water'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Dragonite_Front.png',
            back: 'image/Dragonite_Back.png'
        },
        moves: [
            {
                name: 'Wing Attack',
                type: 'flying',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Outrage',
                type: 'dragon',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Gengar': {
        name: 'Gengar',
        type: ['ghost', 'poison'],
        level: 3,
        stats: {
            health: 245.5,
            physicalAttack: 173,
            physicalDefense: 165.5,
            specialAttack: 270.5,
            specialDefense: 188,
            speed: 240.5,
            attack: 88, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: [ 'fire', 'flying', 'steel', 'water', 'dragon', 'rock', 'electric', 'ice'],
            weak: ['ground', 'dark', 'psychic', 'ghost'],
            superWeak: [],
            resistant: ['fairy', 'grass'],
            superResistant: ['bug', 'poison'],
            immune: ['normal', 'fighting']
        },
        image: {
            front: 'image/Gengar_Front.png',
            back: 'image/Gengar_Back.png'
        },
        moves: [
            {
                name: 'Dream Eater',
                type: 'psychic',
                damage_category: 'Special',
                power: 100,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Dark Pulse',
                type: 'dark',
                damage_category: 'Special',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Golem': {
        name: 'Golem',
        type: ['rock', 'ground'],
        level: 3,
        stats: {
            health: 275.5,
            physicalAttack: 255.5,
            physicalDefense: 270.5,
            specialAttack: 158,
            specialDefense: 173,
            speed: 143,
            attack: 64, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['fairy', 'bug', 'ghost', 'psychic', 'dragon', 'dark'],
            weak: ['ground', 'fighting', 'steel', 'ice'],
            superWeak: ['grass', 'water'],
            resistant: ['normal', 'flying', 'fire', 'rock'],
            superResistant: ['poison'],
            immune: ['electric']
        },
        image: {
            front: 'image/Golem_Front.png',
            back: 'image/Golem_Back.png'
        },
        moves: [
            {
                name: 'Earthquake',
                type: 'ground',
                damage_category: 'Physical',
                power: 100,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double-Edge',
                type: 'normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Victreebel': {
        name: 'Victreebel',
        type: ['grass', 'poison'],
        level: 3,
        stats: {
            health: 275.5,
            physicalAttack: 233,
            physicalDefense: 173,
            specialAttack: 225.5,
            specialDefense: 180.5,
            speed: 180.5,
            attack: 68, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'dragon', 'dark'],
            weak: ['flying', 'fire', 'psychic', 'ice'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Victreebel_Front.png',
            back: 'image/Victreebel_Back.png'
        },
        moves: [
            {
                name: 'Leaf Storm',
                type: 'grass',
                damage_category: 'Special',
                power: 140,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Leaf Blade',
                type: 'grass',
                damage_category: 'Physical',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Machamp': {
        name: 'Machamp',
        type: 'fighting',
        level: 3,
        stats: {
            health: 290.5,
            physicalAttack: 270.5,
            physicalDefense: 195.5,
            specialAttack: 173,
            specialDefense: 203,
            speed: 158,
            attack: 84, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'ghost', 'water', 'fighting', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'poison', 'dragon'],
            weak: ['psychic', 'fairy', 'flying'],
            superWeak: [],
            resistant: ['rock', 'bug', 'dark'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Machamp_Front.png',
            back: 'image/Machamp_Back.png'
        },
        moves: [
            {
                name: 'Strength',
                type: 'normal',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cross Chop',
                type: 'fighting',
                damage_category: 'Physical',
                power: 100,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Alakazam': {
        name: 'Alakazam',
        type: 'psychic',
        level: 3,
        stats: {
            health: 238,
            physicalAttack: 150.5,
            physicalDefense: 143,
            specialAttack: 278,
            specialDefense: 218,
            speed: 255.5,
            attack: 100, // Keeping original attack for backward compatibility
            range: 3
        },
        typeEffectiveness: {
            normal: ['normal', 'fairy', 'flying', 'water', 'ice', 'steel', 'fire', 'electric', 'grass', 'ground', 'rock', 'poison', 'dragon'],
            weak: ['bug', 'ghost', 'dark'],
            superWeak: [],
            resistant: ['psychic', 'fighting'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Alakazam_Front.png',
            back: 'image/Alakazam_Back.png'
        },
        moves: [
            {
                name: 'Psychic',
                type: 'psychic',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Future Sight',
                type: 'psychic',
                damage_category: 'Special',
                power: 100,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Poliwrath': {
        name: 'Poliwrath',
        type: ['water', 'fighting'],
        level: 3,
        stats: {
            health: 290.5,
            physicalAttack: 218,
            physicalDefense: 218,
            specialAttack: 180.5,
            specialDefense: 210.5,
            speed: 180.5,
            attack: 56, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fighting', 'ground', 'ghost', 'poison', 'dragon'],
            weak: ['fairy', 'flying', 'psychic', 'electric', 'grass'],
            superWeak: [],
            resistant: ['rock', 'bug', 'water', 'ice', 'steel', 'fire', 'dark'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/Poliwrath_Front.png',
            back: 'image/Poliwrath_Back.png'
        },
        moves: [
            {
                name: 'Waterfall',
                type: 'water',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Submission',
                type: 'fighting',
                damage_category: 'Physical',
                power: 80,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Vileplume': {
        name: 'Vileplume',
        type: ['grass', 'poison'],
        level: 3,
        stats: {
            health: 268,
            physicalAttack: 195.5,
            physicalDefense: 203,
            specialAttack: 240.5,
            specialDefense: 210.5,
            speed: 150.5,
            attack: 64, // Keeping original attack for backward compatibility
            range: 2
        },
        typeEffectiveness: {
            normal: ['normal', 'ground', 'rock', 'bug', 'ghost', 'steel', 'poison', 'dragon', 'dark'],
            weak: ['fire', 'flying', 'ice', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'water', 'electric', 'fairy'],
            superResistant: ['grass'],
            immune: []
        },
        image: {
            front: 'image/Vileplume_Front.png',
            back: 'image/Vileplume_Back.png'
        },
        moves: [
            {
                name: 'Petal Dance',
                type: 'grass',
                damage_category: 'Special',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Sludge Bomb',
                type: 'poison',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidoking': {
        name: 'Nidoking',
        type: ['poison', 'ground'],
        level: 3,
        stats: {
            health: 277,
            physicalAttack: 228.5,
            physicalDefense: 191,
            specialAttack: 203,
            specialDefense: 188,
            speed: 203,
            attack: 76, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'grass', 'ghost', 'flying', 'steel', 'dragon', 'dark'],
            weak: ['ground', 'water', 'ice', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'bug', 'rock', 'fairy'],
            superResistant: ['poison'],
            immune: ['electric']
        },
        image: {
            front: 'image/Nidoking_Front.png',
            back: 'image/Nidoking_Back.png'
        },
        moves: [
            {
                name: 'Thrash',
                type: 'normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Megahorn',
                type: 'bug',
                damage_category: 'Physical',
                power: 120,
                accuracy: 85,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidoqueen': {
        name: 'Nidoqueen',
        type: ['poison', 'ground'],
        level: 3,
        stats: {
            health: 290.5,
            physicalAttack: 213.5,
            physicalDefense: 206,
            specialAttack: 188,
            specialDefense: 203,
            speed: 189.5,
            attack: 68, // Keeping original attack for backward compatibility
            range: 1
        },
        typeEffectiveness: {
            normal: ['normal', 'fire', 'grass', 'ghost', 'flying', 'steel', 'dragon', 'dark'],
            weak: ['ground', 'water', 'ice', 'psychic'],
            superWeak: [],
            resistant: ['fighting', 'bug', 'rock', 'fairy'],
            superResistant: ['poison'],
            immune: ['electric']
        },
        image: {
            front: 'image/Nidoqueen_Front.png',
            back: 'image/Nidoqueen_Back.png'
        },
        moves: [
            {
                name: 'Body Slam',
                type: 'normal',
                damage_category: 'Physical',
                power: 85,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Superpower',
                type: 'fighting',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    }
};