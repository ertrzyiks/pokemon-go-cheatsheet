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

const MatchupMarker = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "neutral" | "effective" | "effective-x2" | "weak" | "weak-x2";
}) => {
  const ratingMap = {
    neutral: "neutral" as const,
    effective: "up" as const,
    "effective-x2": "double-up" as const,
    weak: "down" as const,
    "weak-x2": "double-down" as const,
  };
  const ratingValue = ratingMap[color];

  return (
    <div
      className={clsx("flex items-center px-4 py-2", {
        "bg-slate-800": color === "neutral",
        "bg-green-800": color === "effective" || color === "effective-x2",
        "bg-red-800": color === "weak" || color === "weak-x2",
      })}
    >
      {children}

      <Rating value={ratingValue} />
    </div>
  );
};

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
          <MatchupMarker
            key={type}
            color={
              hasStrongMatchup(type)
                ? "effective"
                : hasWeakMatchup(type)
                ? "weak"
                : "neutral"
            }
          >
            {pokemonTypesConfig[type].label}
          </MatchupMarker>
        ))}
      </div>

      <div className="my-4">
        <p className="my-4">Legend</p>
        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="weak-x2">Type</MatchupMarker>{" "}
          <span className="text-sm">
            attack type is double not very effective
          </span>
        </div>

        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="weak">Type</MatchupMarker>{" "}
          <span className="text-sm">attack type is not very effective</span>
        </div>

        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="neutral">Type</MatchupMarker>{" "}
          <span className="text-sm">attack type is neutral</span>
        </div>

        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="effective">Type</MatchupMarker>{" "}
          <span className="text-sm">attack type is super-effective</span>
        </div>

        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="effective-x2">Type</MatchupMarker>{" "}
          <span className="text-sm">attack type is double super-effective</span>
        </div>
      </div>
    </div>
  );
};

export default DefensePartyApp;
