// Pokemon data with their evolution chains and stats
// Damage calculation formula: Damage=([([(2*Level/5)+2]*Power*[A/D])/50]+2)*Critical*Type
// Level mapping: Level 1 = 25, Level 2 = 50, Level 3 = 75 in the damage formula
const pokemonData = {
    // Base Pokemon (Level 1)
    'Bulbasaur': {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        level: 1,
        evolution: 'Ivysaur',
        cost: 2,
        stats: {
            health: 81,
            physicalAttack: 53,
            physicalDefense: 53,
            specialAttack: 61,
            specialDefense: 61,
            speed: 51,
            range: 2
        },
        typeEffectiveness: {
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Bulbasaur_Front.png',
            back: 'image/Bulbasaur_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Vine Whip',
                type: 'Grass',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charmander': {
        name: 'Charmander',
        type: 'Fire',
        level: 1,
        evolution: 'Charmeleon',
        cost: 2,
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
            normal: ['Normal', 'Poison', 'Electric', 'Psychic', 'Flying', 'Ghost', 'Dragon', 'Dark', 'Fighting'],
            weak: ['Ground', 'Rock', 'Water'],
            superWeak: [],
            resistant: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Ember',
                type: 'Fire',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Squirtle': {
        name: 'Squirtle',
        type: 'Water',
        level: 1,
        evolution: 'Wartortle',
        cost: 2,
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
            normal: ['Normal', 'Bug', 'Ground', 'Rock', 'Poison', 'Psychic', 'Fairy', 'Flying', 'Ghost', 'Dragon', 'Dark', 'Fighting'],
            weak: ['Grass', 'Electric'],
            superWeak: [],
            resistant: ['Steel', 'Fire', 'Ice', 'Water'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Water Gun',
                type: 'Water',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Caterpie': {
        name: 'Caterpie',
        type: 'Bug',
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
            normal: ['Normal', 'Steel', 'Ice', 'Water', 'Bug', 'Poison', 'Psychic', 'Fairy', 'Electric', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Rock', 'Flying'],
            superWeak: [],
            resistant: ['Grass', 'Ground', 'Fighting'],
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
        type: ['Bug', 'Poison'],
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
            normal: ['Normal', 'Ground', 'Steel', 'Ice', 'Water', 'Electric', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Rock', 'Flying', 'Psychic'],
            superWeak: [],
            resistant: ['Poison', 'Bug', 'Fairy'],
            superResistant: ['Fighting', 'Grass'],
            immune: []
        },
        image: {
            front: 'image/Weedle_Front.png',
            back: 'image/Weedle_Back.png'
        },
        moves: [
            {
                name: 'Poison Sting',
                type: 'Poison',
                damage_category: 'Physical',
                power: 15,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Pidgey': {
        name: 'Pidgey',
        type: ['Normal', 'Flying'],
        level: 1,
        evolution: 'Pidgeotto',
        cost: 2,
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
            normal: ['Normal', 'Fire', 'Flying', 'Fighting', 'Poison', 'Steel', 'Psychic', 'Water', 'Dragon', 'Dark', 'Fairy'],
            weak: ['Rock', 'Electric', 'Ice'],
            superWeak: [],
            resistant: ['Bug', 'Grass'],
            superResistant: [],
            immune: ['Ground', 'Ghost']
        },
        image: {
            front: 'image/Pidgey_Front.png',
            back: 'image/Pidgey_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Gust',
                type: 'Flying',
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
        type: 'Dragon',
        level: 1,
        evolution: 'Dragonair',
        cost: 3,
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
            normal: ['Flying', 'Normal', 'Fighting', 'Ground', 'Bug', 'Poison', 'Dark', 'Psychic', 'Ghost', 'Steel', 'Rock'],
            weak: ['Dragon', 'Fairy', 'Ice'],
            superWeak: [],
            resistant: ['Fire', 'Electric', 'Water', 'Grass'],
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
                type: 'Dragon',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Slam',
                type: 'Normal',
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
        type: ['Ghost', 'Poison'],
        level: 1,
        evolution: 'Haunter',
        cost: 3,
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
            normal: [ 'Fire', 'Flying', 'Steel', 'Water', 'Dragon', 'Rock', 'Electric', 'Ice'],
            weak: ['Dark', 'Psychic', 'Ghost'],
            superWeak: [],
            resistant: ['Fairy', 'Grass'],
            superResistant: ['Bug', 'Poison'],
            immune: ['Normal', 'Fighting', 'Ground']
        },
        image: {
            front: 'image/Gastly_Front.png',
            back: 'image/Gastly_Back.png'
        },
        moves: [
            {
                name: 'Lick',
                type: 'Ghost',
                damage_category: 'Physical',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Sucker Punch',
                type: 'Dark',
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
        type: ['Rock', 'Ground'],
        level: 1,
        evolution: 'Graveler',
        cost: 2,
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
            normal: ['Fairy', 'Bug', 'Ghost', 'Psychic', 'Dragon', 'Dark'],
            weak: ['Ground', 'Fighting', 'Steel', 'Ice'],
            superWeak: ['Grass', 'Water'],
            resistant: ['Normal', 'Flying', 'Fire', 'Rock'],
            superResistant: ['Poison'],
            immune: ['Electric']
        },
        image: {
            front: 'image/Geodude_Front.png',
            back: 'image/Geodude_Back.png'
        },
        moves: [
            {
                name: 'Tackle',
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Rock Throw',
                type: 'Rock',
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
        type: ['Grass', 'Poison'],
        level: 1,
        evolution: 'Weepinbell',
        cost: 2,
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
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Bellsprout_Front.png',
            back: 'image/Bellsprout_Back.png'
        },
        moves: [
            {
                name: 'Vine Whip',
                type: 'Grass',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Wrap',
                type: 'Normal',
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
        type: 'Fighting',
        level: 1,
        evolution: 'Machoke',
        cost: 3,
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
            normal: ['Normal', 'Ghost', 'Water', 'Fighting', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Poison', 'Dragon'],
            weak: ['Psychic', 'Fairy', 'Flying'],
            superWeak: [],
            resistant: ['Rock', 'Bug', 'Dark'],
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
                type: 'Fighting',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Low Sweep',
                type: 'Fighting',
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
        type: 'Psychic',
        level: 1,
        evolution: 'Kadabra',
        cost: 3,
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
            normal: ['Normal', 'Fairy', 'Flying', 'Water', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Rock', 'Poison', 'Dragon'],
            weak: ['Bug', 'Ghost', 'Dark'],
            superWeak: [],
            resistant: ['Psychic', 'Fighting'],
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
                type: 'Dark',
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
        type: 'Water',
        level: 1,
        evolution: 'Poliwhirl',
        cost: 2,
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
            normal: ['Normal', 'Fairy', 'Flying', 'Psychic', 'Fighting', 'Ground', 'Rock', 'Bug', 'Ghost', 'Poison', 'Dragon', 'Dark'],
            weak: ['Electric', 'Grass'],
            superWeak: [],
            resistant: ['Water', 'Ice', 'Steel', 'Fire'],
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
                type: 'Water',
                damage_category: 'Special',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Water Gun',
                type: 'Water',
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
        type: ['Grass', 'Poison'],
        level: 1,
        evolution: 'Gloom',
        cost: 2,
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
            normal: ['Normal', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Poison', 'Dragon', 'Dark'],
            weak: ['Fire', 'Flying', 'Ice', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Oddish_Front.png',
            back: 'image/Oddish_Back.png'
        },
        moves: [
            {
                name: 'Absorb',
                type: 'Grass',
                damage_category: 'Special',
                power: 20,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Acid',
                type: 'Poison',
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
        type: 'Poison',
        level: 1,
        evolution: 'Nidorino',
        cost: 2,
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
            normal: ['Normal', 'Fire', 'Rock', 'Electric', 'Ghost', 'Flying', 'Steel', 'Ice', 'Water', 'Dragon', 'Dark'],
            weak: ['Ground', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
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
                type: 'Flying',
                damage_category: 'Physical',
                power: 35,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double Kick',
                type: 'Fighting',
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
        type: 'Poison',
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
            normal: ['Normal', 'Fire', 'Rock', 'Electric', 'Ghost', 'Flying', 'Steel', 'Ice', 'Water', 'Dragon', 'Dark'],
            weak: ['Ground', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double Kick',
                type: 'Fighting',
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
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Ivysaur_Front.png',
            back: 'image/Ivysaur_Back.png'
        },
        moves: [
            {
                name: 'Take Down',
                type: 'Normal',
                damage_category: 'Physical',
                power: 90,
                accuracy: 85,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Razor Leaf',
                type: 'Grass',
                damage_category: 'Physical',
                power: 55,
                accuracy: 95,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charmeleon': {
        name: 'Charmeleon',
        type: 'Fire',
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
            normal: ['Normal', 'Poison', 'Electric', 'Psychic', 'Flying', 'Ghost', 'Dragon', 'Dark', 'Fighting'],
            weak: ['Ground', 'Rock', 'Water'],
            superWeak: [],
            resistant: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy'],
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
                type: 'Fire',
                damage_category: 'Physical',
                power: 65,
                accuracy: 95,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Flame Burst',
                type: 'Fire',
                damage_category: 'Special',
                power: 70,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Wartortle': {
        name: 'Wartortle',
        type: 'Water',
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
            normal: ['Normal', 'Bug', 'Ground', 'Rock', 'Poison', 'Psychic', 'Fairy', 'Flying', 'Ghost', 'Dragon', 'Dark', 'Fighting'],
            weak: ['Grass', 'Electric'],
            superWeak: [],
            resistant: ['Steel', 'Fire', 'Ice', 'Water'],
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
                type: 'Dark',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Water Pulse',
                type: 'Water',
                damage_category: 'Special',
                power: 60,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Metapod': {
        name: 'Metapod',
        type: 'Bug',
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
            normal: ['Normal', 'Steel', 'Ice', 'Water', 'Bug', 'Poison', 'Psychic', 'Fairy', 'Electric', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Rock', 'Flying'],
            superWeak: [],
            resistant: ['Grass', 'Ground', 'Fighting'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Kakuna': {
        name: 'Kakuna',
        type: ['Bug', 'Poison'],
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
            normal: ['Normal', 'Ground', 'Steel', 'Ice', 'Water', 'Electric', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Rock', 'Flying', 'Psychic'],
            superWeak: [],
            resistant: ['Poison', 'Bug', 'Fairy'],
            superResistant: ['Fighting', 'Grass'],
            immune: []
        },
        image: {
            front: 'image/Kakuna_Front.png',
            back: 'image/Kakuna_Back.png'
        },
        moves: [
            {
                name: 'Poison Sting',
                type: 'Poison',
                damage_category: 'Physical',
                power: 15,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            }
        ]
    },
    'Pidgeotto': {
        name: 'Pidgeotto',
        type: ['Normal', 'Flying'],
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
            normal: ['Normal', 'Fire', 'Flying', 'Fighting', 'Poison', 'Steel', 'Psychic', 'Water', 'Dragon', 'Dark', 'Fairy'],
            weak: ['Rock', 'Electric', 'Ice'],
            superWeak: [],
            resistant: ['Bug', 'Grass'],
            superResistant: [],
            immune: ['Ground', 'Ghost']
        },
        image: {
            front: 'image/Pidgeotto_Front.png',
            back: 'image/Pidgeotto_Back.png'
        },
        moves: [
            {
                name: 'Wing Attack',
                type: 'Flying',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Twister',
                type: 'Dragon',
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
        type: 'Dragon',
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
            normal: ['Flying', 'Normal', 'Fighting', 'Ground', 'Bug', 'Poison', 'Dark', 'Psychic', 'Ghost', 'Steel', 'Rock'],
            weak: ['Dragon', 'Fairy', 'Ice'],
            superWeak: [],
            resistant: ['Fire', 'Electric', 'Water', 'Grass'],
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
                type: 'Dragon',
                damage_category: 'Physical',
                power: 60,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Aqua Tail',
                type: 'Water',
                damage_category: 'Physical',
                power: 90,
                accuracy: 90,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Haunter': {
        name: 'Haunter',
        type: ['Ghost', 'Poison'],
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
            normal: [ 'Fire', 'Flying', 'Steel', 'Water', 'Dragon', 'Rock', 'Electric', 'Ice'],
            weak: ['Dark', 'Psychic', 'Ghost'],
            superWeak: [],
            resistant: ['Fairy', 'Grass'],
            superResistant: ['Bug', 'Poison'],
            immune: ['Normal', 'Fighting', 'Ground']
        },
        image: {
            front: 'image/Haunter_Front.png',
            back: 'image/Haunter_Back.png'
        },
        moves: [
            {
                name: 'Sucker Punch',
                type: 'Dark',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Shadow Ball',
                type: 'Ghost',
                damage_category: 'Special',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Graveler': {
        name: 'Graveler',
        type: ['Rock', 'Ground'],
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
            normal: ['Fairy', 'Bug', 'Ghost', 'Psychic', 'Dragon', 'Dark'],
            weak: ['Ground', 'Fighting', 'Steel', 'Ice'],
            superWeak: ['Grass', 'Water'],
            resistant: ['Normal', 'Flying', 'Fire', 'Rock'],
            superResistant: ['Poison'],
            immune: ['Electric']
        },
        image: {
            front: 'image/Graveler_Front.png',
            back: 'image/Graveler_Back.png'
        },
        moves: [
            {
                name: 'Smack Down',
                type: 'Rock',
                damage_category: 'Physical',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Bulldoze',
                type: 'Ground',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Weepinbell': {
        name: 'Weepinbell',
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Weepinbell_Front.png',
            back: 'image/Weepinbell_Back.png'
        },
        moves: [
            {
                name: 'Acid',
                type: 'Poison',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Knock Off',
                type: 'Dark',
                damage_category: 'Physical',
                power: 20,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Machoke': {
        name: 'Machoke',
        type: 'Fighting',
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
            normal: ['Normal', 'Ghost', 'Water', 'Fighting', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Poison', 'Dragon'],
            weak: ['Psychic', 'Fairy', 'Flying'],
            superWeak: [],
            resistant: ['Rock', 'Bug', 'Dark'],
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
                type: 'Fighting',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Submission',
                type: 'Fighting',
                damage_category: 'Physical',
                power: 80,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Kadabra': {
        name: 'Kadabra',
        type: 'Psychic',
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
            normal: ['Normal', 'Fairy', 'Flying', 'Water', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Rock', 'Poison', 'Dragon'],
            weak: ['Bug', 'Ghost', 'Dark'],
            superWeak: [],
            resistant: ['Psychic', 'Fighting'],
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
                type: 'Psychic',
                damage_category: 'Special',
                power: 50,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Psybeam',
                type: 'Psychic',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Poliwhirl': {
        name: 'Poliwhirl',
        type: 'Water',
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
            normal: ['Normal', 'Fairy', 'Flying', 'Psychic', 'Fighting', 'Ground', 'Rock', 'Bug', 'Ghost', 'Poison', 'Dragon', 'Dark'],
            weak: ['Electric', 'Grass'],
            superWeak: [],
            resistant: ['Water', 'Ice', 'Steel', 'Fire'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 85,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'BubbleBeam',
                type: 'Water',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Gloom': {
        name: 'Gloom',
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Poison', 'Dragon', 'Dark'],
            weak: ['Fire', 'Flying', 'Ice', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Gloom_Front.png',
            back: 'image/Gloom_Back.png'
        },
        moves: [
            {
                name: 'Mega Drain',
                type: 'Grass',
                damage_category: 'Special',
                power: 40,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Venoshock',
                type: 'Poison',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidorino': {
        name: 'Nidorino',
        type: 'Poison',
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
            normal: ['Normal', 'Fire', 'Rock', 'Electric', 'Ghost', 'Flying', 'Steel', 'Ice', 'Water', 'Dragon', 'Dark'],
            weak: ['Ground', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 65,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cut',
                type: 'Normal',
                damage_category: 'Physical',
                power: 50,
                accuracy: 95,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidorina': {
        name: 'Nidorina',
        type: 'Poison',
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
            normal: ['Normal', 'Fire', 'Rock', 'Electric', 'Ghost', 'Flying', 'Steel', 'Ice', 'Water', 'Dragon', 'Dark'],
            weak: ['Ground', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
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
                type: 'Dark',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cut',
                type: 'Normal',
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
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Venusaur_Front.png',
            back: 'image/Venusaur_Back.png'
        },
        moves: [
            {
                name: 'Double-Edge',
                type: 'Normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Petal Dance',
                type: 'Grass',
                damage_category: 'Special',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Charizard': {
        name: 'Charizard',
        type: ['Fire', 'Flying'],
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
            normal: ['Normal', 'Poison', 'Flying', 'Psychic', 'Ice', 'Ground', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Water', 'Electric'],
            superWeak: ['Rock'],
            resistant: ['Fire', 'Steel', 'Fighting', 'Fairy'],
            superResistant: ['Grass', 'Bug'],
            immune: []
        },
        image: {
            front: 'image/Charizard_Front.png',
            back: 'image/Charizard_Back.png'
        },
        moves: [
            {
                name: 'Flamethrower',
                type: 'Fire',
                damage_category: 'Special',
                power: 95,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Heat Wave',
                type: 'Fire',
                damage_category: 'Special',
                power: 100,
                accuracy: 90,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Blastoise': {
        name: 'Blastoise',
        type: 'Water',
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
            normal: ['Normal', 'Bug', 'Ground', 'Rock', 'Poison', 'Psychic', 'Fairy', 'Flying', 'Ghost', 'Dragon', 'Dark', 'Fighting'],
            weak: ['Grass', 'Electric'],
            superWeak: [],
            resistant: ['Steel', 'Fire', 'Ice', 'Water'],
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
                type: 'Water',
                damage_category: 'Physical',
                power: 90,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Hydro Pump',
                type: 'Water',
                damage_category: 'Special',
                power: 120,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Butterfree': {
        name: 'Butterfree',
        type: ['Bug', 'Flying'],
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
            normal: ['Normal', 'Steel', 'Water', 'Poison', 'Psychic', 'Fairy', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Flying', 'Ice', 'Electric'],
            superWeak: ['Rock'],
            resistant: ['Bug'],
            superResistant: ['Grass', 'Fighting'],
            immune: ['Ground']
        },
        image: {
            front: 'image/Butterfree_Front.png',
            back: 'image/Butterfree_Back.png'
        },
        moves: [
            {
                name: 'Psybeam',
                type: 'Psychic',
                damage_category: 'Special',
                power: 65,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Bug Buzz',
                type: 'Bug',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Beedrill': {
        name: 'Beedrill',
        type: ['Bug', 'Poison'],
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
            normal: ['Normal', 'Ground', 'Steel', 'Ice', 'Water', 'Electric', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Rock', 'Flying', 'Psychic'],
            superWeak: [],
            resistant: ['Poison', 'Bug', 'Fairy'],
            superResistant: ['Fighting', 'Grass'],
            immune: []
        },
        image: {
            front: 'image/Beedrill_Front.png',
            back: 'image/Beedrill_Back.png'
        },
        moves: [
            {
                name: 'X-Scissor',
                type: 'Bug',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Poison Jab',
                type: 'Poison',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Pidgeot': {
        name: 'Pidgeot',
        type: ['Normal', 'Flying'],
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
            normal: ['Normal', 'Fire', 'Flying', 'Fighting', 'Poison', 'Steel', 'Psychic', 'Water', 'Dragon', 'Dark', 'Fairy'],
            weak: ['Rock', 'Electric', 'Ice'],
            superWeak: [],
            resistant: ['Bug', 'Grass'],
            superResistant: [],
            immune: ['Ground', 'Ghost']
        },
        image: {
            front: 'image/Pidgeot_Front.png',
            back: 'image/Pidgeot_Back.png'
        },
        moves: [
            {
                name: 'Fly',
                type: 'Flying',
                damage_category: 'Physical',
                power: 90,
                accuracy: 95,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Hurricane',
                type: 'Flying',
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
        type: ['Dragon', 'Flying'],
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
            normal: ['Flying', 'Electric', 'Normal', 'Ground', 'Poison', 'Dark', 'Psychic', 'Ghost', 'Steel'],
            weak: ['Dragon', 'Fairy', 'Rock'],
            superWeak: ['Ice'],
            resistant: ['Fire', 'Fighting', 'Bug', 'Water'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Dragonite_Front.png',
            back: 'image/Dragonite_Back.png'
        },
        moves: [
            {
                name: 'Wing Attack',
                type: 'Flying',
                damage_category: 'Physical',
                power: 60,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Outrage',
                type: 'Dragon',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Gengar': {
        name: 'Gengar',
        type: ['Ghost', 'Poison'],
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
            normal: [ 'Fire', 'Flying', 'Steel', 'Water', 'Dragon', 'Rock', 'Electric', 'Ice'],
            weak: ['Ground', 'Dark', 'Psychic', 'Ghost'],
            superWeak: [],
            resistant: ['Fairy', 'Grass'],
            superResistant: ['Bug', 'Poison'],
            immune: ['Normal', 'Fighting']
        },
        image: {
            front: 'image/Gengar_Front.png',
            back: 'image/Gengar_Back.png'
        },
        moves: [
            {
                name: 'Dream Eater',
                type: 'Psychic',
                damage_category: 'Special',
                power: 100,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Dark Pulse',
                type: 'Dark',
                damage_category: 'Special',
                power: 80,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Golem': {
        name: 'Golem',
        type: ['Rock', 'Ground'],
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
            normal: ['Fairy', 'Bug', 'Ghost', 'Psychic', 'Dragon', 'Dark'],
            weak: ['Ground', 'Fighting', 'Steel', 'Ice'],
            superWeak: ['Grass', 'Water'],
            resistant: ['Normal', 'Flying', 'Fire', 'Rock'],
            superResistant: ['Poison'],
            immune: ['Electric']
        },
        image: {
            front: 'image/Golem_Front.png',
            back: 'image/Golem_Back.png'
        },
        moves: [
            {
                name: 'Earthquake',
                type: 'Ground',
                damage_category: 'Physical',
                power: 100,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Double-Edge',
                type: 'Normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Victreebel': {
        name: 'Victreebel',
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark'],
            weak: ['Flying', 'Fire', 'Psychic', 'Ice'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Victreebel_Front.png',
            back: 'image/Victreebel_Back.png'
        },
        moves: [
            {
                name: 'Leaf Storm',
                type: 'Grass',
                damage_category: 'Special',
                power: 140,
                accuracy: 90,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Leaf Blade',
                type: 'Grass',
                damage_category: 'Physical',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Machamp': {
        name: 'Machamp',
        type: 'Fighting',
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
            normal: ['Normal', 'Ghost', 'Water', 'Fighting', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Poison', 'Dragon'],
            weak: ['Psychic', 'Fairy', 'Flying'],
            superWeak: [],
            resistant: ['Rock', 'Bug', 'Dark'],
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
                type: 'Normal',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Cross Chop',
                type: 'Fighting',
                damage_category: 'Physical',
                power: 100,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Alakazam': {
        name: 'Alakazam',
        type: 'Psychic',
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
            normal: ['Normal', 'Fairy', 'Flying', 'Water', 'Ice', 'Steel', 'Fire', 'Electric', 'Grass', 'Ground', 'Rock', 'Poison', 'Dragon'],
            weak: ['Bug', 'Ghost', 'Dark'],
            superWeak: [],
            resistant: ['Psychic', 'Fighting'],
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
                type: 'Psychic',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Future Sight',
                type: 'Psychic',
                damage_category: 'Special',
                power: 100,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Poliwrath': {
        name: 'Poliwrath',
        type: ['Water', 'Fighting'],
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
            normal: ['Normal', 'Fighting', 'Ground', 'Ghost', 'Poison', 'Dragon'],
            weak: ['Fairy', 'Flying', 'Psychic', 'Electric', 'Grass'],
            superWeak: [],
            resistant: ['Rock', 'Bug', 'Water', 'Ice', 'Steel', 'Fire', 'Dark'],
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
                type: 'Water',
                damage_category: 'Physical',
                power: 80,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Submission',
                type: 'Fighting',
                damage_category: 'Physical',
                power: 80,
                accuracy: 80,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Vileplume': {
        name: 'Vileplume',
        type: ['Grass', 'Poison'],
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
            normal: ['Normal', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Poison', 'Dragon', 'Dark'],
            weak: ['Fire', 'Flying', 'Ice', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Water', 'Electric', 'Fairy'],
            superResistant: ['Grass'],
            immune: []
        },
        image: {
            front: 'image/Vileplume_Front.png',
            back: 'image/Vileplume_Back.png'
        },
        moves: [
            {
                name: 'Petal Dance',
                type: 'Grass',
                damage_category: 'Special',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Sludge Bomb',
                type: 'Poison',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidoking': {
        name: 'Nidoking',
        type: ['Poison', 'Ground'],
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
            normal: ['Normal', 'Fire', 'Grass', 'Ghost', 'Flying', 'Steel', 'Dragon', 'Dark'],
            weak: ['Ground', 'Water', 'Ice', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Bug', 'Rock', 'Fairy'],
            superResistant: ['Poison'],
            immune: ['Electric']
        },
        image: {
            front: 'image/Nidoking_Front.png',
            back: 'image/Nidoking_Back.png'
        },
        moves: [
            {
                name: 'Thrash',
                type: 'Normal',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Megahorn',
                type: 'Bug',
                damage_category: 'Physical',
                power: 120,
                accuracy: 85,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Nidoqueen': {
        name: 'Nidoqueen',
        type: ['Poison', 'Ground'],
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
            normal: ['Normal', 'Fire', 'Grass', 'Ghost', 'Flying', 'Steel', 'Dragon', 'Dark'],
            weak: ['Ground', 'Water', 'Ice', 'Psychic'],
            superWeak: [],
            resistant: ['Fighting', 'Bug', 'Rock', 'Fairy'],
            superResistant: ['Poison'],
            immune: ['Electric']
        },
        image: {
            front: 'image/Nidoqueen_Front.png',
            back: 'image/Nidoqueen_Back.png'
        },
        moves: [
            {
                name: 'Body Slam',
                type: 'Normal',
                damage_category: 'Physical',
                power: 85,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Superpower',
                type: 'Fighting',
                damage_category: 'Physical',
                power: 120,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    }
};