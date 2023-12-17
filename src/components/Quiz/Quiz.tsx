import { useState } from "react";

import "./styles.css";
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
    <div className="quiz">
      <h1 className="quiz-title">Quiz</h1>

      {state.phase === "start" ? (
        <div>
          <Pill as="button" onClick={() => handleStart()}>
            Start
          </Pill>
        </div>
      ) : state.phase === "question" ? (
        <div>
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
        <div>
          <div>Final Score: {state.score}</div>
          <Pill as="button" onClick={() => handleStart()}>
            Play Again
          </Pill>
        </div>
      )}
    </div>
  );
};

export default Quiz;
