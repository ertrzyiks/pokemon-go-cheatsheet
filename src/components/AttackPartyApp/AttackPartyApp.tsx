import { useState } from "react";
import Switch from "../Switch/Switch";
import SwitchList from "../SwitchList/SwitchList";
import { allTypes, type PokemonType } from "../../pokemon_types";
import { getStrongMatchups } from "../../matchups";
import { pokemonTypesConfig } from "../../pokemon_types_config";
import "./styles.css";
import clsx from "clsx";

const MatchupMarker = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "neutral" | "effective";
}) => {
  return (
    <div
      className={clsx("px-4 py-2", {
        "bg-slate-800": color === "neutral",
        "bg-green-800": color === "effective",
      })}
    >
      {children}
    </div>
  );
};

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
          <MatchupMarker
            key={type}
            color={hasStrongMatchup(type) ? "effective" : "neutral"}
          >
            {pokemonTypesConfig[type].label}
          </MatchupMarker>
        ))}
      </div>

      <div className="my-4">
        <p className="my-4">Legend</p>
        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="neutral">Type</MatchupMarker>{" "}
          <span className="text-sm">
            no selected type is super-effective against this type
          </span>
        </div>
        <div className="flex items-center gap-2 my-2">
          <MatchupMarker color="effective">Type</MatchupMarker>{" "}
          <span className="text-sm">
            at least one of selected types is super-effective against this type
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttackPartyApp;
