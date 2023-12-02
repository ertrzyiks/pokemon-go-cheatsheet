import { useState } from "react";
import { allTypes, type PokemonType } from "../../pokemon_types";
import { getStrongMatchups } from "../../matchups";

const PartyApp = () => {
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
          style={{ color: hasStrongMatchup(type) ? "green" : "white" }}
        >
          {type}
        </li>
      ))}
    </div>
  );
};

export default PartyApp;
