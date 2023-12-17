import { allTypes } from "./pokemon_types";
import { getStrongMatchupsToDefeat } from "./matchups";

export const getQuestions = () => {
  const baseTypes = allTypes
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return baseTypes.map((baseType) => {
    const counters = getStrongMatchupsToDefeat([baseType]);
    const answer = counters[Math.floor(Math.random() * counters.length)];
    const wrongOptions = allTypes.filter((type) => !counters.includes(type));
    const randomOptions = wrongOptions
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return {
      question: `What is the best attack to use against a ${baseType} type pokemon?`,
      options: [...randomOptions, answer].sort(() => Math.random() - 0.5),
      answer,
    };
  });
};
