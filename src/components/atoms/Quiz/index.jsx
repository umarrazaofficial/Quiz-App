import React, { useState } from "react";
import { Option, QuizWrapper } from "./Quiz.style";
import quizService from "../../../services/quizService";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "../../../Context/authContext";
import Loaders from "../Loaders";
import Button from "../../molecules/Button";

const Quiz = () => {
  const { fetch, refetch } = useContextHook(AuthContext, (v) => ({
    fetch: v.fetch,
    refetch: v.refetch,
  }));
  const [selectedTab, setSelectedTab] = useState(null);
  const [correctTab, setCorrectTab] = useState(null);
  const { quiz_data, quiz_loading } = quizService.GetQuiz(fetch);

  const handleSubmit = () => {
    setCorrectTab(quiz_data?.correct_option);
  };
  return (
    <>
      {quiz_loading ? (
        <Loaders pageLoader />
      ) : (
        <QuizWrapper>
          <div className="question-wrap">
            <h2>{quiz_data?.question}</h2>
          </div>
          <div className="options-wrap">
            {quiz_data?.options?.map((data, index) => (
              <Option
                $correctTab={+correctTab === index + 1}
                $selected={selectedTab === index + 1}
                key={index}
                onClick={() => setSelectedTab(index + 1)}
              >
                <span className="option-count">{index + 1}.</span>
                <h2>{data}</h2>
              </Option>
            ))}
          </div>
          <div className="btn-wrap">
            <Button
              width="200px"
              disabled={selectedTab === null}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
            <Button
              variant="gray"
              width="200px"
              className="next-btn"
              onClick={() => {
                refetch();
                setCorrectTab(null);
                setSelectedTab(null);
              }}
            >
              Next
            </Button>
          </div>
        </QuizWrapper>
      )}
    </>
  );
};

export default Quiz;
