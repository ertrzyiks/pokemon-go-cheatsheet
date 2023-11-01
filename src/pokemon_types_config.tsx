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
  label: string;
}

export const pokemonTypesConfig: Record<PokemonType, PokemonTypeConfig> = {
  'bug': {
    image: bugImage.src,
    color: '#92bc2c',
    label: 'Bug'
  },
  'dark': {
    image: darkImage.src,
    color: '#595761',
    label: 'Dark'
  },
  'dragon': {
    image: dragonImage.src,
    color: '#0C69C8',
    label: 'Dragon'
  },
  'electric': {
    image: electricImage.src,
    color: '#F2D94E',
    label: 'Electric'
  },
  'fairy': {
    image: fairyImage.src,
    color: '#EE90E6',
    label: 'Fairy'
  },
  'fighting': {
    image: fightingImage.src,
    color: '#D3425F',
    label: 'Fighting'
  },
  'fire': {
    image: fireImage.src,
    color: '#FBA54C',
    label: 'Fire'
  },
  'flying': {
    image: flyingImage.src,
    color: '#A1BBEC',
    label: 'Flying'
  },
  'ghost': {
    image: ghostImage.src,
    color: '#5F6DBC',
    label: 'Ghost'
  },
  'grass': {
    image: grassImage.src,
    color: '#5FBD58',
    label: 'Grass'
  },
  'ground': {
    image: groundImage.src,
    color: '#DA7C4D',
    label: 'Ground'
  },
  'ice': {
    image: iceImage.src,
    color: '#75D0C1',
    label: 'Ice'
  },
  'normal': {
    image: normalImage.src,
    color: '#A0A29F',
    label: 'Normal'
  },
  'poison': {
    image: poisonImage.src,
    color: '#B763CF',
    label: 'Poison'
  },
  'psychic': {
    image: psychicImage.src,
    color: '#FA8581',
    label: 'Psychic'
  },
  'rock': {
    image: rockImage.src,
    color: '#C9BB8A',
    label: 'Rock'
  },
  'steel': {
    image: steelImage.src,
    color: '#5695A3',
    label: 'Steel'
  },
  'water': {
    image: waterImage.src,
    color: '#539DDF',
    label: 'Water'
  }
}
