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
                type: 'gragon',
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
            resistant: ['fighting', 'water', 'electric', 'grass', 'fairy'],
            superResistant: [],
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
                type: 'grass',
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