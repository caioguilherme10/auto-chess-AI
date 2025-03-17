# Pokémon Auto Chess - Game Wiki

## AI-Powered Development

This Pokémon Auto Chess game was developed on Trae.ai, leveraging the power of multiple AI models. The primary development assistant was Claude-3.7-Sonnet, with additional support from Gemini 2.0 Flash and DeepSeek R1. These AI tools helped with code generation, game design, and documentation, showcasing the potential of AI-assisted game development.

## Table of Contents
- [AI-Powered Development](#ai-powered-development)
- [Game Overview](#game-overview)
- [Game Mechanics](#game-mechanics)
  - [Gold and Economy](#gold-and-economy)
  - [Player Level](#player-level)
  - [Health System](#health-system)
- [Pokémon](#pokémon)
  - [Types](#types)
  - [Stats](#stats)
  - [Evolution System](#evolution-system)
  - [Type Effectiveness](#type-effectiveness)
- [Battle System](#battle-system)
  - [Battle Board](#battle-board)
  - [Combat Mechanics](#combat-mechanics)
  - [Damage Calculation](#damage-calculation)
  - [Range and Targeting](#range-and-targeting)
- [Shop System](#shop-system)
  - [Buying Pokémon](#buying-pokémon)
  - [Refreshing the Shop](#refreshing-the-shop)
- [Bench and Board Management](#bench-and-board-management)
  - [Drag and Drop](#drag-and-drop)
  - [Selling Pokémon](#selling-pokémon)
- [Controls and UI](#controls-and-ui)
- [Strategy Tips](#strategy-tips)

## Game Overview

Pokémon Auto Chess is a strategic auto-battler game featuring Pokémon characters. Players build a team of Pokémon, position them strategically on a battle board, and watch them battle automatically against enemy teams. The goal is to survive as long as possible by defeating enemy teams while managing your economy and evolving your Pokémon.

## Game Mechanics

### Gold and Economy

- **Starting Gold**: Players begin with 10 gold
- **Gold Usage**:
  - Buy Pokémon from the shop (costs vary by Pokémon tier)
    - Green tier: 1 gold (weaker Pokémon)
    - Blue tier: 2 gold (average Pokémon)
    - Purple tier: 3 gold (stronger Pokémon)
  - Refresh the shop (2 gold)
  - Buy EXP to level up (4 gold)
- **Gold Income**: Earn gold by winning battles (5 gold + player level)
- **Selling Pokémon**: Sell unwanted Pokémon for gold equal to their cost (higher for evolved Pokémon)

### Player Level

- Players start at level 1
- Each level increases the maximum number of Pokémon you can place on the board (Level + 2)
- Higher levels allow you to face stronger opponents with better rewards
- Level up by purchasing EXP with gold

### Health System

- Players start with 100 health
- Losing a battle causes you to lose health (damage = min(level + 2, 10))
- When health reaches 0, the game is over

## Pokémon

### Types

Pokémon come in various types, each with their own strengths:
- Grass
- Fire
- Water
- Bug
- Flying
- Dragon
- Ghost
- Rock
- Fighting
- Psychic
- Poison
- Electric
- Ice
- Ground
- Normal
- Steel
- Dark

### Stats

Each Pokémon has the following stats:
- **Health**: How much damage a Pokémon can take before fainting
- **Physical Attack**: Determines damage dealt with physical moves
- **Physical Defense**: Reduces damage taken from physical moves
- **Special Attack**: Determines damage dealt with special moves
- **Special Defense**: Reduces damage taken from special moves
- **Speed**: Affects critical hit chance and potentially attack order
- **Range**: How far a Pokémon can attack (1 = adjacent cells only, 2-3 = can attack from distance)

### Evolution System

Pokémon can evolve into stronger forms:

1. **Basic Evolution**: Combine three identical Pokémon to evolve them into their next form
2. **Evolution Chains**:
   - Bulbasaur → Ivysaur → Venusaur
   - Charmander → Charmeleon → Charizard
   - Squirtle → Wartortle → Blastoise
   - Caterpie → Metapod → Butterfree
   - Weedle → Kakuna → Beedrill
   - Pidgey → Pidgeotto → Pidgeot
   - Dratini → Dragonair → Dragonite
   - Gastly → Haunter → Gengar
   - Geodude → Graveler → Golem
   - Bellsprout → Weepinbell → Victreebel
   - Machop → Machoke → Machamp
   - Abra → Kadabra → Alakazam
   - Poliwag → Poliwhirl → Poliwrath
   - Oddish → Gloom → Vileplume
   - NidoranM → Nidorino → Nidoking
   - NidoranF → Nidorina → Nidoqueen

3. **Benefits of Evolution**:
   - Significantly increased stats
   - Higher sell value
   - Better combat performance

### Type Effectiveness

Pokémon types have strengths and weaknesses against other types:

- **Super Effective (2x damage)**: When a move is particularly effective against a type
- **Not Very Effective (0.5x damage)**: When a move is resisted by a type
- **No Effect (0x damage)**: When a move has no effect against a type

Examples:
- Fire moves deal 2x damage to Grass Pokémon
- Water moves deal 0.5x damage to Water Pokémon
- Ground moves have no effect on Flying Pokémon

Dual-type Pokémon combine the resistances and weaknesses of both types, which can result in:
- **Super Weakness (4x damage)**: When both types are weak to the same move
- **Super Resistance (0.25x damage)**: When both types resist the same move

## Battle System

### Battle Board

- 6x8 grid divided into two areas:
  - Enemy area (top 3 rows)
  - Player area (bottom 3 rows)
- Players can only place Pokémon in their own area
- The number of Pokémon you can place is limited by your level

### Combat Mechanics

1. **Battle Initiation**: Press the "Start Battle" button to begin
2. **Enemy Generation**: Enemies are generated based on player level
3. **Turn-Based Combat**: Pokémon attack in rounds
4. **Battle End**: Battle ends when all Pokémon on one side are defeated or after 30 rounds
5. **Rewards/Penalties**:
   - Victory: Gain gold
   - Defeat: Lose health

### Damage Calculation

Damage is calculated using the following formula:

`Damage = ([([(2 * Level / 5) + 2] * Power * [A/D]) / 50] + 2) * Critical * Type`

Where:
- **Level**: Pokémon's level (mapped as Level 1 = 25, Level 2 = 50, Level 3 = 75)
- **Power**: The base power of the move being used
- **A/D**: Attacker's Attack stat divided by Defender's Defense stat
  - For Physical moves: Physical Attack ÷ Physical Defense
  - For Special moves: Special Attack ÷ Special Defense
- **Critical**: 2 if the attack is a critical hit, 1 otherwise
- **Type**: Type effectiveness multiplier (0, 0.25, 0.5, 1, 2, or 4)

Critical hits have a base chance of 6.25%, which can increase based on the attacker's Speed stat (up to a maximum of 25%).

### Range and Targeting

- **Range**: Determines how far a Pokémon can attack
  - Range 1: Can only attack adjacent cells
  - Range 2-3: Can attack from a distance
- **Targeting Priority**:
  1. Enemies within range (prioritizing lowest health)
  2. Closest enemy if none are in range

## Shop System

### Buying Pokémon

- Shop offers 5 random Pokémon
- Each Pokémon has a cost (typically 1 gold for base forms)
- Click on a Pokémon to purchase it (if you have enough gold)
- Purchased Pokémon go to your bench

### Refreshing the Shop

- Costs 2 gold to refresh
- Provides 5 new random Pokémon
- Strategic refreshing is key to finding Pokémon you need for evolutions

## Bench and Board Management

### Drag and Drop

- Drag Pokémon from bench to board to place them in battle
- Drag Pokémon from board to bench to remove them from battle
- Drag Pokémon to different positions to optimize their placement

### Selling Pokémon

- Drag unwanted Pokémon to the trash bin to sell them
- Sell value equals the Pokémon's cost
- Evolved Pokémon have higher sell values (cost × 3^(level-1))

## Controls and UI

- **Shop**: Located at the bottom of the screen
- **Bench**: Middle section for storing Pokémon not in battle
- **Battle Board**: Main grid where battles take place
- **Player Stats**: Displays gold, health, and level
- **Buttons**:
  - Refresh Shop: Get new Pokémon in the shop (2 gold)
  - Buy EXP: Increase your level (4 gold)
  - Start Battle: Begin a battle round
- **Pokémon Info**: Click on a Pokémon to see its detailed stats

## Strategy Tips

1. **Economy Management**:
   - Balance spending between Pokémon, refreshes, and leveling
   - Don't refresh too often early game

2. **Evolution Priority**:
   - Focus on completing evolutions for power spikes
   - Keep bench space for potential evolution components

3. **Positioning**:
   - Place high-health Pokémon in front
   - Position ranged Pokémon in the back
   - Consider Pokémon attack range when placing

4. **Type Advantages**:
   - Build teams with complementary types
   - Watch for type effectiveness in battles

5. **Bench Management**:
   - Keep your bench organized
   - Sell lower-tier Pokémon when bench space is needed

6. **Leveling Strategy**:
   - Level up strategically to place more Pokémon on the board
   - Higher levels mean stronger enemies but better rewards