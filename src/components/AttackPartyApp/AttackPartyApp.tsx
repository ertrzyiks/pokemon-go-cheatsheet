import { useState } from "react";
import Switch from "../Switch/Switch";
import SwitchList from "../SwitchList/SwitchList";
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
      <h1 className="my-8 text-5xl">Attack Party</h1>

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

      <hr />

      <div className="attack-matchup-grid">
        {allTypes.map((type) => (
          <div
            key={type}
            style={{
              border: "1px solid #eee",
              padding: "16px",
              backgroundColor: hasStrongMatchup(type) ? "green" : "transparent",
            }}
          >
            {pokemonTypesConfig[type].label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackPartyApp;
