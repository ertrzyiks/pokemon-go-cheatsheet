import { PokemonType } from "./pokemon_types";

  export const gruntCatchphrases: { type: PokemonType, text: string }[] = [
    {type: 'bug', text: 'Go, my super bug Pokémon!'},
    {type: 'dark', text: 'Wherever there is light, there is also shadow.'},
    { type: 'dragon', text: 'ROAR! ...How\'d that sound?'},
    { type: 'electric', text: 'Get ready to be shocked!'},
    {type: 'fairy', text: 'Check out my cute Pokémon!'},
{type: 'fighting', text: 'This buff physique isn\'t just for show!'},
{type: 'fire', text: 'Do you know how hot Pokémon fire breath can get?'},
{type: 'flying', text: 'Battle against my Flying-type Pokémon!'},
{type: 'ghost', text: 'Ke... ke... ke... ke... ke... ke!'},
{type: 'grass', text: 'Don\'t tangle with us!'},
{type: 'ground', text: 'You\'ll be defeated into the ground!'},
{type: 'ice', text: 'You\'re gonna be frozen in your tracks.'},
{type: 'normal', text: 'Normal does not mean weak'},
{type: 'poison', text: 'Coiled and ready to strike!'},
{type: 'psychic', text: 'Are you scared of psychics that use unseen power?'},
{type: 'rock', text: 'Let\'s rock and roll!'},
{type: 'steel', text: 'You\'re no match for my iron will!'},
{type: 'water', text: 'These waters are treacherous!'}
  ]

  export const gruntCatchphrasesInOrder: { type: PokemonType, text: string }[] = gruntCatchphrases.sort((a, b) => {
    if (a.text < b.text) {
      return -1;
    }
    if (a.text > b.text) {
      return 1;
    }
    return 0;
  } )