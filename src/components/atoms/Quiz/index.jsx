import React from "react";
import { QuizWrapper } from "./Quiz.style";
import quizService from "../../../services/quizService";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "../../../Context/authContext";

const Quiz = () => {
  const { fetch } = useContextHook(AuthContext, (v) => ({
    fetch: v.fetch,
  }));
  const { quiz_data, quiz_loading } = quizService.getQuiz(fetch);
  return (
    <QuizWrapper>
      <div>Quiz</div>
    </QuizWrapper>
  );
};

export default Quiz;
