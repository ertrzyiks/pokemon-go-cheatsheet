import { allTypes } from "./pokemon_types";
import { getStrongMatchupsToDefeat, getWeakMatchups } from "./matchups";

const randomize = <T>(array: T[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getStrongMatchupQuestions = (numberOfQuestions: number) => {
  const baseTypes = randomize(allTypes).slice(0, numberOfQuestions);

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

export const getStrongDefenseQuestions = (numberOfQuestions: number) => {
  const baseTypes = randomize(allTypes).slice(0, numberOfQuestions);

  return baseTypes.map((baseType) => {
    const counters = getWeakMatchups(baseType);
    const answer = randomize(counters)[0];
    const wrongOptions = allTypes.filter((type) => !counters.includes(type));
    const randomOptions = randomize(wrongOptions).slice(0, 3);

    return {
      question: `What type of pokemon is resistant to the ${baseType} type attack?`,
      options: randomize([...randomOptions, answer]),
      answer,
    };
  });
};

export const getQuestions = () => {
  const questions = getStrongDefenseQuestions(5);
  const questions2 = getStrongMatchupQuestions(5);

  return randomize([...questions, ...questions2]);
};
