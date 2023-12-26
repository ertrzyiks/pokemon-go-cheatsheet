import { useState } from "react";
import { clsx } from "clsx";

import Switch from "../Switch/Switch";
import SwitchList from "../SwitchList/SwitchList";
import Rating from "../Rating/Rating";
import { allTypes, type PokemonType } from "../../pokemon_types";
import {
  getStrongMatchupsToDefeat,
  getWeakMatchupsToDefeat,
} from "../../matchups";
import { pokemonTypesConfig } from "../../pokemon_types_config";
import "./styles.css";

const DefensePartyApp = () => {
  const [types, setTypes] = useState<PokemonType[]>([]);

  const allStrongMatchups = getStrongMatchupsToDefeat(types);
  const allWeakMatchups = getWeakMatchupsToDefeat(types);

  const hasStrongMatchup = (type: PokemonType) => {
    return allStrongMatchups.includes(type);
  };

  const hasWeakMatchup = (type: PokemonType) => {
    return allWeakMatchups.includes(type);
  };

  const toggleType = (type: PokemonType) => {
    setTypes((prev) => {
      return prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type].slice(-2);
    });
  };

  return (
    <div>
      <h1 className="my-8 text-5xl">Dual Types app</h1>

      <p className="my-4">Types of the pokemon</p>

      <SwitchList>
        {allTypes.map((type) => (
          <div className="defense-party-app-list-item" key={type}>
            <Switch
              icon={pokemonTypesConfig[type].image}
              color={pokemonTypesConfig[type].color}
              value={types.includes(type)}
              onChange={() => toggleType(type)}
            />{" "}
            {pokemonTypesConfig[type].label}
          </div>
        ))}
      </SwitchList>

      <p className="my-4">Effectiveness of attack types</p>

      <div className="defense-matchup-grid my-4 mx-auto">
        {allTypes.map((type) => (
          <div
            key={type}
            className={clsx("flex justify-between items-center px-4 py-2", {
              "bg-slate-800": !hasStrongMatchup(type) && !hasWeakMatchup(type),
              "bg-green-800": hasStrongMatchup(type),
              "bg-red-800": hasWeakMatchup(type),
            })}
          >
            {pokemonTypesConfig[type].label}
            <Rating
              value={
                hasStrongMatchup(type)
                  ? "up"
                  : hasWeakMatchup(type)
                  ? "down"
                  : "neutral"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefensePartyApp;
