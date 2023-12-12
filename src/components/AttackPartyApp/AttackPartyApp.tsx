import { useState } from "react";
import Switch from "../Switch/Switch";
import { allTypes, type PokemonType } from "../../pokemon_types";
import { getStrongMatchups } from "../../matchups";
import { pokemonTypesConfig } from "../../pokemon_types_config";
import "./styles.css";

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
      <h1>Party</h1>

      <div className="attack-party-app-list">
        {allTypes.map((type) => (
          <div className="attack-party-app-list-item" key={type}>
            <Switch
              icon={pokemonTypesConfig[type].image}
              color={pokemonTypesConfig[type].color}
              value={types.includes(type)}
              onChange={() => toggleType(type)}
            />{" "}
            {type}
          </div>
        ))}
      </div>

      <hr />

      {allTypes.map((type) => (
        <li
          key={type}
          style={{ color: hasStrongMatchup(type) ? "green" : "white" }}
        >
          {type}
        </li>
      ))}
    </div>
  );
};

export default AttackPartyApp;
