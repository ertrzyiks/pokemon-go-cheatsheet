import { allTypes } from "./pokemon_types";
import { getStrongMatchupsToDefeat } from "./matchups";

const randomize = <T>(array: T[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getQuestions = () => {
  const numberOfQuestions = 10;
  const baseTypes = allTypes
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, numberOfQuestions);

  return baseTypes.map((baseType) => {
    const counters = getStrongMatchupsToDefeat([baseType]);
    const answer = randomize(counters)[0];
    const wrongOptions = allTypes.filter((type) => !counters.includes(type));
    const randomOptions = randomize(wrongOptions).slice(0, 3);

    return {
      question: `What is the best attack to use against a ${baseType} type pokemon?`,
      options: randomize([...randomOptions, answer]),
      answer,
    };
  });
};
