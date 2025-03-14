# Pokémon Auto Chess - Game Wiki

## Table of Contents
- [Game Overview](#game-overview)
- [Game Mechanics](#game-mechanics)
  - [Gold and Economy](#gold-and-economy)
  - [Player Level](#player-level)
  - [Health System](#health-system)
- [Pokémon](#pokémon)
  - [Types](#types)
  - [Stats](#stats)
  - [Evolution System](#evolution-system)
- [Battle System](#battle-system)
  - [Battle Board](#battle-board)
  - [Combat Mechanics](#combat-mechanics)
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
  - Buy Pokémon from the shop (cost varies by Pokémon)
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

### Stats

Each Pokémon has the following stats:
- **Attack**: Determines damage dealt in battle
- **Health**: How much damage a Pokémon can take before fainting
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
4. **Damage Calculation**: Damage is based on the attacker's attack stat
5. **Battle End**: Battle ends when all Pokémon on one side are defeated or after 30 rounds
6. **Rewards/Penalties**:
   - Victory: Gain gold
   - Defeat: Lose health

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