import { useState } from "react";
import { allTypes, type PokemonType } from "../../pokemon_types";
import {
  getStrongMatchupsToDefeat,
  getWeakMatchupsToDefeat,
} from "../../matchups";

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

      {allTypes.map((type) => (
        <li
          key={type}
          style={{ color: types.includes(type) ? "blue" : "white" }}
          onClick={() => toggleType(type)}
        >
          {type}
        </li>
      ))}

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
