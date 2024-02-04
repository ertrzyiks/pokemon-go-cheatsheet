import fs from "fs";

const res = await fetch(
  "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json"
);
const json = await res.json();
fs.writeFileSync("pokedex.json", JSON.stringify(json, null, 2));
