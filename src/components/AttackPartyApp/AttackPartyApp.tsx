import { useState } from "react";
import Switch from "../Switch/Switch";
import SwitchList from "../SwitchList/SwitchList";
import { allTypes, type PokemonType } from "../../pokemon_types";
import { getStrongMatchups } from "../../matchups";
import { pokemonTypesConfig } from "../../pokemon_types_config";
import "./styles.css";
import clsx from "clsx";

const AttackPartyApp = () => {
  const [types, setTypes] = useState<PokemonType[]>([]);

  const allMatchups = types.map((type) => getStrongMatchups(type));

  const hasStrongMatchup = (type: PokemonType) => {
    return allMatchups.some((matchups) => matchups.includes(type));
  };

  const toggleType = (type: PokemonType) => {
    setTypes((prev) => {
      return prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type];
    });
  };

  return (
    <div>
      <h1 className="my-8 text-5xl">Attack Party</h1>

      <p className="my-4">Available attack types</p>

      <SwitchList>
        {allTypes.map((type) => (
          <div className="attack-party-app-list-item" key={type}>
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

      <p className="my-4">Coverage</p>

      <div className="attack-matchup-grid my-8 mx-auto">
        {allTypes.map((type) => (
          <div
            key={type}
            className={clsx("px-4 py-2", {
              "bg-slate-800": !hasStrongMatchup(type),
              "bg-green-800": hasStrongMatchup(type),
            })}
          >
            {pokemonTypesConfig[type].label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackPartyApp;
