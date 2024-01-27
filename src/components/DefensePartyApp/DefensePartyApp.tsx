import { useState } from "react";

import { clsx } from "clsx";

import Switch from "../Switch/Switch";
import SwitchList from "../SwitchList/SwitchList";
import PokemonTypeList from "../PokemonTypeList/PokemonTypeList";
import Rating from "../Rating/Rating";
import { allTypes, type PokemonType } from "../../pokemon_types";
import { getMatchupsToDefeat } from "../../matchups";
import { Matchup } from "../../matchups";
import { pokemonTypesConfig } from "../../pokemon_types_config";
import "./styles.css";

type MatchupColor =
  | "neutral"
  | "effective"
  | "effective-x2"
  | "weak"
  | "weak-x2";

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
      className={clsx("flex items-center justify-between px-4 py-2 bg-glare", {
        "bg-slate-800": color === "neutral",
        "bg-green-800": color === "effective",
        "bg-green-600": color === "effective-x2",
        "bg-amber-800": color === "weak",
        "bg-red-800": color === "weak-x2",
      })}
    >
      {children}

      <Rating value={ratingValue} />
    </div>
  );
};

const matchupToColor: Record<Matchup, MatchupColor> = {
  [Matchup.Regular]: "neutral",
  [Matchup.Strong]: "effective",
  [Matchup.VeryStrong]: "effective-x2",
  [Matchup.Weak]: "weak",
  [Matchup.VeryWeak]: "weak-x2",
};

const legendConfig = [
  {
    color: "weak-x2" as const,
    text: "attack type is very not effective",
  },
  {
    color: "weak" as const,
    text: "attack type is not effective",
  },
  {
    color: "neutral" as const,
    text: "attack type is neutral",
  },
  {
    color: "effective" as const,
    text: "attack type is super-effective",
  },
  {
    color: "effective-x2" as const,
    text: "attack type is super super-effective",
  },
];

const DefensePartyApp = () => {
  const [types, setTypes] = useState<PokemonType[]>([]);

  const allMatchups = getMatchupsToDefeat(types);

  const getMatchup = (type: PokemonType) => {
    return allMatchups.find((matchup) => matchup.type === type)?.result;
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
      <h1 className="my-8 text-5xl">Dual Type Pokemon</h1>

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

      <p className="my-4">
        Effectiveness of attack types{" "}
        {types.length > 0 ? (
          <>
            against a <PokemonTypeList types={types} /> pokemon
          </>
        ) : (
          ""
        )}{" "}
      </p>

      <div className="defense-matchup-grid my-4 mx-auto">
        {allTypes.map((type) => (
          <MatchupMarker
            key={type}
            color={matchupToColor[getMatchup(type) ?? Matchup.Regular]}
          >
            {pokemonTypesConfig[type].label}
          </MatchupMarker>
        ))}
      </div>

      <div className="my-4">
        <p className="my-4">Legend</p>

        {legendConfig.map(({ color, text }) => (
          <div key={color} className="flex items-center gap-2 my-2">
            <MatchupMarker color={color}>Type</MatchupMarker>{" "}
            <span className="text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefensePartyApp;
