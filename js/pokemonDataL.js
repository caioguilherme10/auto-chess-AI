const pokemonDataL = {
    'Articuno': {
        name: 'Articuno',
        type: ['Ice', 'Flying'],
        level: 4,
        cost: 30,
        stats: {
            health: 384,
            physicalAttack: 269,
            physicalDefense: 299,
            specialAttack: 289,
            specialDefense: 349,
            speed: 269,
            range: 3
        },
        typeEffectiveness: {
            normal: ['Normal', 'Poison', 'Fighting', 'Fairy', 'Water', 'Psychic', 'Ice', 'Flying', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Fire', 'Steel', 'Electric'],
            superWeak: ['Rock'],
            resistant: ['Bug', 'Grass'],
            superResistant: [],
            immune: ['Ground']
        },
        image: {
            front: 'image/lendario/Articuno_Front.png',
            back: 'image/lendario/Articuno_Back.png'
        },
        moves: [
            {
                name: 'Blizzard',
                type: 'Ice',
                damage_category: 'Special',
                power: 120,
                accuracy: 70,
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
    'Zapdos': {
        name: 'Zapdos',
        type: ['Electric', 'Flying'],
        level: 4,
        cost: 30,
        stats: {
            health: 384,
            physicalAttack: 279,
            physicalDefense: 269,
            specialAttack: 349,
            specialDefense: 279,
            speed: 299,
            range: 3
        },
        typeEffectiveness: {
            normal: ['Normal', 'Fire', 'Electric', 'Poison', 'Fairy', 'Water', 'Psychic', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Ice', 'Rock'],
            superWeak: [],
            resistant: ['Fighting', 'Flying', 'Bug', 'Steel', 'Grass'],
            superResistant: [],
            immune: ['Ground']
        },
        image: {
            front: 'image/lendario/Zapdos_Front.png',
            back: 'image/lendario/Zapdos_Back.png'
        },
        moves: [
            {
                name: 'Thunder',
                type: 'Electric',
                damage_category: 'Special',
                power: 110,
                accuracy: 70,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Thunderbolt',
                type: 'Electric',
                damage_category: 'Special',
                power: 95,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Moltres': {
        name: 'Moltres',
        type: ['Fire', 'Flying'],
        level: 4,
        cost: 30,
        stats: {
            health: 384,
            physicalAttack: 299,
            physicalDefense: 279,
            specialAttack: 349,
            specialDefense: 269,
            speed: 279,
            range: 3
        },
        typeEffectiveness: {
            normal: ['Normal', 'Ice', 'Flying', 'Poison', 'Psychic', 'Ghost', 'Dragon', 'Dark'],
            weak: ['Electric', 'Water'],
            superWeak: ['Rock'],
            resistant: ['Fighting', 'Fire', 'Fairy', 'Steel'],
            superResistant: ['Bug', 'Grass'],
            immune: ['Ground']
        },
        image: {
            front: 'image/lendario/Moltres_Front.png',
            back: 'image/lendario/Moltres_Back.png'
        },
        moves: [
            {
                name: 'Heat Wave',
                type: 'Fire',
                damage_category: 'Special',
                power: 100,
                accuracy: 90,
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
    'Mew': {
        name: 'Mew',
        type: 'Psychic',
        level: 4,
        cost: 30,
        stats: {
            health: 404,
            physicalAttack: 299,
            physicalDefense: 299,
            specialAttack: 299,
            specialDefense: 299,
            speed: 299,
            range: 3
        },
        typeEffectiveness: {
            normal: ['Normal', 'Ground', 'Grass', 'Rock', 'Ice', 'Flying', 'Fire', 'Fairy', 'Steel', 'Poison', 'Dragon', 'Electric', 'Water'],
            weak: ['Bug', 'Ghost', 'Dark'],
            superWeak: [],
            resistant: ['Fighting', 'Psychic'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/lendario/Mew_Front.png',
            back: 'image/lendario/Mew_Back.png'
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
                name: 'Aura Sphere',
                type: 'Fighting',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
    'Mewtwo': {
        name: 'Mewtwo',
        type: 'Psychic',
        level: 4,
        cost: 30,
        stats: {
            health: 416,
            physicalAttack: 319,
            physicalDefense: 279,
            specialAttack: 407,
            specialDefense: 279,
            speed: 359,
            range: 3
        },
        typeEffectiveness: {
            normal: ['Normal', 'Ground', 'Grass', 'Rock', 'Ice', 'Flying', 'Fire', 'Fairy', 'Steel', 'Poison', 'Dragon', 'Electric', 'Water'],
            weak: ['Bug', 'Ghost', 'Dark'],
            superWeak: [],
            resistant: ['Fighting', 'Psychic'],
            superResistant: [],
            immune: []
        },
        image: {
            front: 'image/lendario/Mewtwo_Front.png',
            back: 'image/lendario/Mewtwo_Back.png'
        },
        moves: [
            {
                name: 'Psystrike',
                type: 'Psychic',
                damage_category: 'Special',
                power: 100,
                accuracy: 100,
                image: 'image/move/Tackle_V.png'
            },
            {
                name: 'Aura Sphere',
                type: 'Fighting',
                damage_category: 'Special',
                power: 90,
                accuracy: 100,
                image: 'image/move/Vine_Whip_V.png'
            }
        ]
    },
};