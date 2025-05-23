import { useState, useRef } from "react";
import { clsx } from "clsx";

import Pill from "../Pill/Pill";

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
  const ref = useRef<HTMLButtonElement>(null);
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
    setSelected(value);

    setTimeout(() => {
      ref.current?.focus();
    }, 0);
  };

  return (
    <div className="w-full">
      <div className="text-xl text-center my-8">{question}</div>

      <div className="grid grid-cols-2 gap-4 my-4">
        {options.map((option, index) => (
          <div className="flex items-center justify-center" key={option}>
            <Pill
              as={state === "pending" ? "button" : "div"}
              className={clsx({
                "text-white": true,
                "bg-blue-500":
                  state === "pending" ||
                  option !== answer ||
                  option !== selected,
                "bg-green-500": state !== "pending" && option === answer,
                "bg-red-500": state === "incorrect" && option === selected,
              })}
              onClick={() => state === "pending" && handleAnswer(option)}
            >
              {index + 1}. {option}
            </Pill>
          </div>
        ))}
      </div>

      <div
        className={clsx("flex justify-center my-8", {
          invisible: state === "pending",
        })}
      >
        <Pill
          as="button"
          ref={ref}
          className="bg-blue-500"
          onClick={() => onContinue()}
        >
          Continue
        </Pill>
      </div>
    </div>
  );
};
export default QuizQuestion;
