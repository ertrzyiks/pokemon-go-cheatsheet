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
  scores: number[];
}

interface QuizEndState {
  phase: "end";
  score: number;
}

type QuizState = QuizStartState | QuizQuestionState | QuizEndState;

const getSum = (scores: number[]) => {
  return scores.reduce((acc, score) => {
    if (score === null) {
      return acc;
    }
    return acc + score;
  }, 0);
};

const QuizProgress = ({
  question,
  scores,
}: {
  question: number;
  scores: number[];
}) => {
  const getColor = (current: number, index: number) => {
    if (current == index && scores[index] === null) {
      return "bg-blue-500";
    } else if (current < index) {
      return "bg-gray-500";
    }
    if (scores[index] > 0) {
      return "bg-green-500";
    }
    return "bg-red-500";
  };

  return (
    <div className="flex justify-center gap-4 border border-gray-300 rounded-full p-1 mb-4">
      {scores.map((score, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${getColor(question, index)}`}
        ></div>
      ))}
    </div>
  );
};

const Quiz = () => {
  const [state, setState] = useState<QuizState>({ phase: "start" });

  const handleStart = () => {
    const questions = getQuestions();
    const scores = questions.map(() => null);
    setState({
      phase: "question",
      question: 0,
      questions,
      scores,
    });
  };

  const handleContinue = () => {
    if (state.phase !== "question") {
      return;
    }

    if (state.question + 1 < state.questions.length) {
      setState({ ...state, question: state.question + 1 });
    } else {
      setState({ phase: "end", scores: state.scores });
    }
  };

  return (
    <div className="flex flex-col align-center justify-center h-[calc(100dvh-50px)] max-w-xl mx-auto">
      {state.phase === "start" ? (
        <div>
          <h1 className="text-3xl my-4 text-center">Quiz</h1>
          <div className="flex flex-col">
            <p className="leading-6 my-6">
              Learn to quickly recognize the best match to defeat a pokemon in a
              Go Battle, Gym Battle, or a Raid. By answering the questions of
              the quiz you will be faced the same challenges you will face in
              the pokemon battles.
            </p>

            <p className="leading-6 my-6">
              Answer 10 questions about the pokemon attack type effectiveness
              and find out how well you know the game rules!
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
        </div>
      ) : state.phase === "question" ? (
        <div className="w-full">
          <QuizQuestion
            key={state.question}
            question={state.questions[state.question].question}
            options={state.questions[state.question].options}
            answer={state.questions[state.question].answer}
            onAnswer={(score) => {
              setState({
                ...state,
                scores: state.scores.map((s, i) =>
                  i === state.question ? score : s
                ),
              });
            }}
            onContinue={handleContinue}
          />
          <QuizProgress scores={state.scores} question={state.question} />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl my-4 text-center">Quiz</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">Final Score: {getSum(state.scores)}</div>

            <Pill as="button" onClick={() => handleStart()}>
              Play Again
            </Pill>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
