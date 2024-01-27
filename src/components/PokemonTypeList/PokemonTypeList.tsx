import type { ReactNode } from "react";
import type { PokemonType } from "../../pokemon_types";
import { pokemonTypesConfig } from "../../pokemon_types_config";

const PokemonTypeList = ({ types }: { types: PokemonType[] }) => {
  if (types.length === 0) {
    return null;
  }

  const result: ReactNode[] = [];
  types.forEach((type) => {
    result.push(
      <em key={type} className="font-semibold">
        {pokemonTypesConfig[type].label}
      </em>
    );
    result.push(" / ");
  });

  return <>{result.slice(0, -1)}</>;
};

export default PokemonTypeList;
