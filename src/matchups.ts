import type { PokemonType } from './pokemon_types'

enum Matchup {
  Strong,
  Regular,
  Weak,
}

const getDefaultMatchup = () => ({
  water: Matchup.Regular,
  fire: Matchup.Regular,
  grass: Matchup.Regular,
  electric: Matchup.Regular,
  ice: Matchup.Regular,
  fighting: Matchup.Regular,
  poison: Matchup.Regular,
  ground: Matchup.Regular,
  flying: Matchup.Regular,
  psychic: Matchup.Regular,
  bug: Matchup.Regular,
  rock: Matchup.Regular,
  ghost: Matchup.Regular,
  dark: Matchup.Regular,
  dragon: Matchup.Regular,
  fairy: Matchup.Regular,
  steel: Matchup.Regular,
  normal: Matchup.Regular,
})

const matchups: Record<PokemonType, Record<PokemonType, Matchup>> = {
  water: getDefaultMatchup(),
  fire: getDefaultMatchup(),
  grass: getDefaultMatchup(),
  electric: getDefaultMatchup(),
  ice: getDefaultMatchup(),
  fighting: getDefaultMatchup(),
  poison: getDefaultMatchup(),
  ground: getDefaultMatchup(),
  flying: getDefaultMatchup(),
  psychic: getDefaultMatchup(),
  bug: getDefaultMatchup(),
  rock: getDefaultMatchup(),
  ghost: getDefaultMatchup(),
  dark: getDefaultMatchup(),
  dragon: getDefaultMatchup(),
  fairy: getDefaultMatchup(),
  steel: getDefaultMatchup(),
  normal: getDefaultMatchup(),
}

matchups['normal']['rock'] = Matchup.Weak
matchups['normal']['ghost'] = Matchup.Weak
matchups['normal']['steel'] = Matchup.Weak

matchups['fighting']['normal'] = Matchup.Strong
matchups['fighting']['rock'] = Matchup.Strong
matchups['fighting']['steel'] = Matchup.Strong
matchups['fighting']['ice'] = Matchup.Strong
matchups['fighting']['dark'] = Matchup.Strong
matchups['fighting']['flying'] = Matchup.Weak
matchups['fighting']['poison'] = Matchup.Weak
matchups['fighting']['bug'] = Matchup.Weak
matchups['fighting']['psychic'] = Matchup.Weak
matchups['fighting']['fairy'] = Matchup.Weak
matchups['fighting']['ghost'] = Matchup.Weak

matchups['flying']['fighting'] = Matchup.Strong
matchups['flying']['bug'] = Matchup.Strong
matchups['flying']['grass'] = Matchup.Strong
matchups['flying']['electric'] = Matchup.Weak
matchups['flying']['rock'] = Matchup.Weak
matchups['flying']['steel'] = Matchup.Weak

matchups['poison']['grass'] = Matchup.Strong
matchups['poison']['fairy'] = Matchup.Strong
matchups['poison']['ground'] = Matchup.Weak
matchups['poison']['rock'] = Matchup.Weak
matchups['poison']['ghost'] = Matchup.Weak
matchups['poison']['steel'] = Matchup.Weak
matchups['poison']['poison'] = Matchup.Weak

matchups['ground']['poison'] = Matchup.Strong
matchups['ground']['rock'] = Matchup.Strong
matchups['ground']['steel'] = Matchup.Strong
matchups['ground']['fire'] = Matchup.Strong
matchups['ground']['electric'] = Matchup.Strong
matchups['ground']['flying'] = Matchup.Weak
matchups['ground']['bug'] = Matchup.Weak
matchups['ground']['grass'] = Matchup.Weak

matchups['rock']['flying'] = Matchup.Strong
matchups['rock']['bug'] = Matchup.Strong
matchups['rock']['fire'] = Matchup.Strong
matchups['rock']['ice'] = Matchup.Strong
matchups['rock']['steel'] = Matchup.Weak
matchups['rock']['fighting'] = Matchup.Weak
matchups['rock']['ground'] = Matchup.Weak

matchups['bug']['grass'] = Matchup.Strong
matchups['bug']['psychic'] = Matchup.Strong
matchups['bug']['dark'] = Matchup.Strong
matchups['bug']['fighting'] = Matchup.Weak
matchups['bug']['flying'] = Matchup.Weak
matchups['bug']['poison'] = Matchup.Weak
matchups['bug']['ghost'] = Matchup.Weak
matchups['bug']['steel'] = Matchup.Weak
matchups['bug']['fire'] = Matchup.Weak
matchups['bug']['fairy'] = Matchup.Weak

matchups['ghost']['ghost'] = Matchup.Strong
matchups['ghost']['psychic'] = Matchup.Strong
matchups['ghost']['normal'] = Matchup.Weak
matchups['ghost']['dark'] = Matchup.Weak

matchups['steel']['ice'] = Matchup.Strong
matchups['steel']['rock'] = Matchup.Strong
matchups['steel']['fairy'] = Matchup.Strong
matchups['steel']['steel'] = Matchup.Weak
matchups['steel']['fire'] = Matchup.Weak
matchups['steel']['water'] = Matchup.Weak
matchups['steel']['electric'] = Matchup.Weak

matchups['fire']['grass'] = Matchup.Strong
matchups['fire']['ice'] = Matchup.Strong
matchups['fire']['bug'] = Matchup.Strong
matchups['fire']['steel'] = Matchup.Strong
matchups['fire']['rock'] = Matchup.Weak
matchups['fire']['fire'] = Matchup.Weak
matchups['fire']['water'] = Matchup.Weak
matchups['fire']['dragon'] = Matchup.Weak

matchups['water']['ground'] = Matchup.Strong
matchups['water']['rock'] = Matchup.Strong
matchups['water']['fire'] = Matchup.Strong
matchups['water']['water'] = Matchup.Weak
matchups['water']['grass'] = Matchup.Weak
matchups['water']['dragon'] = Matchup.Weak

matchups['grass']['ground'] = Matchup.Strong
matchups['grass']['rock'] = Matchup.Strong
matchups['grass']['water'] = Matchup.Strong
matchups['grass']['flying'] = Matchup.Weak
matchups['grass']['poison'] = Matchup.Weak
matchups['grass']['bug'] = Matchup.Weak
matchups['grass']['steel'] = Matchup.Weak
matchups['grass']['fire'] = Matchup.Weak
matchups['grass']['grass'] = Matchup.Weak
matchups['grass']['dragon'] = Matchup.Weak

matchups['electric']['water'] = Matchup.Strong
matchups['electric']['flying'] = Matchup.Strong
matchups['electric']['electric'] = Matchup.Weak
matchups['electric']['grass'] = Matchup.Weak
matchups['electric']['dragon'] = Matchup.Weak
matchups['electric']['ground'] = Matchup.Weak

matchups['psychic']['fighting'] = Matchup.Strong
matchups['psychic']['poison'] = Matchup.Strong
matchups['psychic']['psychic'] = Matchup.Weak
matchups['psychic']['steel'] = Matchup.Weak
matchups['psychic']['dark'] = Matchup.Weak

matchups['ice']['flying'] = Matchup.Strong
matchups['ice']['ground'] = Matchup.Strong
matchups['ice']['grass'] = Matchup.Strong
matchups['ice']['dragon'] = Matchup.Strong
matchups['ice']['steel'] = Matchup.Weak
matchups['ice']['fire'] = Matchup.Weak
matchups['ice']['water'] = Matchup.Weak
matchups['ice']['ice'] = Matchup.Weak

matchups['dragon']['dragon'] = Matchup.Strong
matchups['dragon']['steel'] = Matchup.Weak
matchups['dragon']['fairy'] = Matchup.Weak

matchups['fairy']['fighting'] = Matchup.Strong
matchups['fairy']['dragon'] = Matchup.Strong
matchups['fairy']['dark'] = Matchup.Strong
matchups['fairy']['poison'] = Matchup.Weak
matchups['fairy']['steel'] = Matchup.Weak
matchups['fairy']['fire'] = Matchup.Weak

matchups['dark']['ghost'] = Matchup.Strong
matchups['dark']['psychic'] = Matchup.Strong
matchups['dark']['dark'] = Matchup.Weak
matchups['dark']['fighting'] = Matchup.Weak
matchups['dark']['fairy'] = Matchup.Weak

export function getMatchup({ attacker, defender }: { attacker: PokemonType, defender: PokemonType }): Matchup {
  return matchups[attacker][defender]
}

export function getStrongMatchups(type: PokemonType) {
  return Object.entries(matchups[type]).filter(([, matchup]) => matchup === Matchup.Strong).map(([type]) => type as PokemonType)
}

export function getWeakMatchups(type: PokemonType) {
  return Object.entries(matchups[type]).filter(([, matchup]) => matchup === Matchup.Weak).map(([type]) => type as PokemonType)
}
