import { useState } from "react";

import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Pill from "../Pill/Pill";
import { getQuestions } from "../../quiz_questions";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizStartState {
  phase: "start";
}

interface QuizQuestionState {
  phase: "question";
  question: number;
  questions: Question[];
  score: number;
}

interface QuizEndState {
  phase: "end";
  score: number;
}

type QuizState = QuizStartState | QuizQuestionState | QuizEndState;

const Quiz = () => {
  const [state, setState] = useState<QuizState>({ phase: "start" });

  const handleStart = () => {
    setState({
      phase: "question",
      question: 0,
      questions: getQuestions(),
      score: 0,
    });
  };

  const handleContinue = () => {
    if (state.phase !== "question") {
      return;
    }

    if (state.question + 1 < state.questions.length) {
      setState({ ...state, question: state.question + 1 });
    } else {
      setState({ phase: "end", score: state.score });
    }
  };

  return (
    <div className="flex flex-col align-center justify-center h-[calc(100dvh-50px)] max-w-xl mx-auto">
      <h1 className="text-3xl my-4 text-center">Quiz</h1>

      {state.phase === "start" ? (
        <div className="flex flex-col">
          <p className="leading-6 my-6">
            Learn to quickly recognize the best match to defeat a pokemon in a
            Go Battle, Gym Battle, or a Raid. By answering the questions of the
            quiz you will be faced the same challenges you will face in the
            pokemon battles.
          </p>

          <p className="leading-6 my-6">
            Answer 10 questions about the pokemon attack type effectiveness and
            find out how well you know the game rules!
          </p>

          <div className="flex items-center justify-center">
            <Pill
              as="button"
              className="bg-blue-500"
              onClick={() => handleStart()}
            >
              Start
            </Pill>
          </div>
        </div>
      ) : state.phase === "question" ? (
        <div className="w-full">
          <div>
            {state.question + 1} / {state.questions.length}
          </div>

          <div>Score: {state.score}</div>

          <QuizQuestion
            key={state.question}
            question={state.questions[state.question].question}
            options={state.questions[state.question].options}
            answer={state.questions[state.question].answer}
            onAnswer={(score) => {
              setState({ ...state, score: state.score + score });
            }}
            onContinue={handleContinue}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">Final Score: {state.score}</div>

          <Pill as="button" onClick={() => handleStart()}>
            Play Again
          </Pill>
        </div>
      )}
    </div>
  );
};

export default Quiz;
