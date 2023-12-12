import { useState } from "react";
import Switch from "../Switch/Switch";
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
      <h1>Party</h1>

      <div className="defense-party-app-list">
        {allTypes.map((type) => (
          <div className="defense-party-app-list-item" key={type}>
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
          style={{
            color: hasStrongMatchup(type)
              ? "green"
              : hasWeakMatchup(type)
              ? "red"
              : "white",
          }}
        >
          {type}
        </li>
      ))}
    </div>
  );
};

export default DefensePartyApp;
