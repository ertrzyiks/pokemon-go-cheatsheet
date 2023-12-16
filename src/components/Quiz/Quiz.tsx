import { useState } from "react";

import QuizQuestion from "../QuizQuestion/QuizQuestion";

const getQuestions = () => {
  return [
    {
      question: "What is the best attack to use against a dragon type pokemon?",
      options: ["poison", "water", "fairy", "fire"] as const,
      answer: "fairy",
    },
    {
      question: "What is the best attack to use against a water type pokemon?",
      options: ["poison", "grass", "fire", "ghost"] as const,
      answer: "grass",
    },
  ];
};

const Quiz = () => {
  const [state, setState] = useState<"start" | "question" | "end">("start");
  const [questions, setQuestions] = useState(null);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setState("question");
    setQuestions(getQuestions());
    setQuestion(0);
    setScore(0);
  };

  const handleContinue = () => {
    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setState("end");
    }
  };

  return (
    <div>
      Quiz
      {state === "start" ? (
        <button onClick={() => handleStart()}>Start</button>
      ) : state === "question" ? (
        <div>
          <div>
            {question + 1} / {questions.length}
          </div>

          <div>Score: {score}</div>

          <QuizQuestion
            key={question}
            question={questions[question].question}
            options={questions[question].options}
            answer={questions[question].answer}
            onAnswer={(score) => {
              setScore((currentScore) => currentScore + score);
            }}
            onContinue={handleContinue}
          />
        </div>
      ) : (
        <div>
          <div>Final Score: {score}</div>
          <button onClick={() => setState("start")}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
