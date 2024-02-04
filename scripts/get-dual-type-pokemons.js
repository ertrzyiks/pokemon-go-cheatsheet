import fs from "fs";

const pokedex = JSON.parse(fs.readFileSync("pokedex.json", "utf8"));

const typeMap = {
  POKEMON_TYPE_FIRE: "fire",
  POKEMON_TYPE_ROCK: "rock",
  POKEMON_TYPE_WATER: "water",
  POKEMON_TYPE_GRASS: "grass",
  POKEMON_TYPE_ELECTRIC: "electric",
  POKEMON_TYPE_GROUND: "ground",
  POKEMON_TYPE_NORMAL: "normal",
  POKEMON_TYPE_POISON: "poison",
  POKEMON_TYPE_FIGHTING: "fighting",
  POKEMON_TYPE_FLYING: "flying",
  POKEMON_TYPE_PSYCHIC: "psychic",
  POKEMON_TYPE_BUG: "bug",
  POKEMON_TYPE_GHOST: "ghost",
  POKEMON_TYPE_DARK: "dark",
  POKEMON_TYPE_STEEL: "steel",
  POKEMON_TYPE_FAIRY: "fairy",
  POKEMON_TYPE_ICE: "ice",
  POKEMON_TYPE_DRAGON: "dragon",
};

const getType = (type) => {
  if (!typeMap[type]) {
    throw new Error(`Unknown type: ${type}`);
  }

  return typeMap[type];
};

const examples = {};

pokedex.forEach((pokemon) => {
  if (pokemon.secondaryType === null) {
    return;
  }

  const types = [pokemon.primaryType, pokemon.secondaryType]
    .map((pt) => getType(pt.type))
    .sort();

  const typesKey = types.join("+");

  examples[typesKey] = examples[typesKey] || [];
  examples[typesKey].push({
    name: pokemon.names.English,
    dexNr: pokemon.dexNr,
  });
});

fs.writeFileSync(
  "src/dual_type_pokemons.json",
  JSON.stringify(examples, null, 2)
);
