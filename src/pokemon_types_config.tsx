import type { PokemonType } from "./pokemon_types";

import bugImage from "./assets/Bug.png";
import darkImage from "./assets/Dark.png";
import dragonImage from "./assets/Dragon.png";
import electricImage from "./assets/Electric.png";
import fairyImage from "./assets/Fairy.png";
import fightingImage from "./assets/Fighting.png";
import fireImage from "./assets/Fire.png";
import flyingImage from "./assets/Flying.png";
import ghostImage from "./assets/Ghost.png";
import grassImage from "./assets/Grass.png";
import groundImage from "./assets/Ground.png";
import iceImage from "./assets/Ice.png";
import normalImage from "./assets/Normal.png";
import poisonImage from "./assets/Poison.png";
import psychicImage from "./assets/Psychic.png";
import rockImage from "./assets/Rock.png";
import steelImage from "./assets/Steel.png";
import waterImage from "./assets/Water.png";

interface PokemonTypeConfig {
  image: string;
  color: string;
}

export const pokemonTypesConfig: Record<PokemonType, PokemonTypeConfig> = {
  'bug': {
    image: bugImage.src,
    color: '#92bc2c',
  },
  'dark': {
    image: darkImage.src,
    color: '#595761',
  },
  'dragon': {
    image: dragonImage.src,
    color: '#0C69C8'
  },
  'electric': {
    image: electricImage.src,
    color: '#F2D94E',
  },
  'fairy': {
    image: fairyImage.src,
    color: '#EE90E6',
  },
  'fighting': {
    image: fightingImage.src,
    color: '#D3425F',
  },
  'fire': {
    image: fireImage.src,
    color: '#FBA54C',
  },
  'flying': {
    image: flyingImage.src,
    color: '#A1BBEC',
  },
  'ghost': {
    image: ghostImage.src,
    color: '#5F6DBC',
  },
  'grass': {
    image: grassImage.src,
    color: '#5FBD58',
  },
  'ground': {
    image: groundImage.src,
    color: '#DA7C4D',
  },
  'ice': {
    image: iceImage.src,
    color: '#75D0C1',
  },
  'normal': {
    image: normalImage.src,
    color: '#A0A29F',
  },
  'poison': {
    image: poisonImage.src,
    color: '#B763CF',
  },
  'psychic': {
    image: psychicImage.src,
    color: '#FA8581',
  },
  'rock': {
    image: rockImage.src,
    color: '#C9BB8A',
  },
  'steel': {
    image: steelImage.src,
    color: '#5695A3',
  },
  'water': {
    image: waterImage.src,
    color: '#539DDF',
  }
}
