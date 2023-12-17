import { useState } from "react";

import Pill from "../Pill/Pill";
import "./styles.css";

interface Props {
  question: string;
  options: string[];
  answer: string;
  onAnswer: (score: number) => void;
  onContinue: () => void;
}

const QuizQuestion = ({
  question,
  options,
  answer,
  onAnswer,
  onContinue,
}: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  const state =
    selected === null
      ? "pending"
      : selected === answer
      ? "correct"
      : "incorrect";

  const handleAnswer = (value: string) => {
    const score = value === answer ? 1 : 0;

    onAnswer(score);
    setSelected(answer);
  };

  return (
    <div>
      <div>{question}</div>
      <div className="quiz_question-options">
        {options.map((option, index) => (
          <Pill
            as="button"
            style={{
              color: "white",
              backgroundColor:
                state === "pending" || option !== answer ? "blue" : "green",
            }}
            key={option}
            onClick={() => handleAnswer(option)}
          >
            {index + 1}. {option}
          </Pill>
        ))}
      </div>

      {state !== "pending" && (
        <Pill as="button" onClick={() => onContinue()}>
          Continue
        </Pill>
      )}
    </div>
  );
};
export default QuizQuestion;
