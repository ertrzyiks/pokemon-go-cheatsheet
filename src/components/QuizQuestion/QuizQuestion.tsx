import { useState } from "react";

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
      <div>
        {options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      {state !== "pending" && (
        <button onClick={() => onContinue()}>Continue</button>
      )}
    </div>
  );
};
export default QuizQuestion;
