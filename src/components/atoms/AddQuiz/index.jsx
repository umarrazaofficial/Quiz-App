import React, { useState } from "react";
import { AddQuizWrapper } from "./AddQuiz.style";
import AddQuizImage from "../../../assets/addQuiz.svg";
import Field from "../Field";
import Form from "../../molecules/Form/Form";
import { useForm } from "../../molecules/Form";
import Button from "../../molecules/Button";
import quizService from "../../../services/quizService";
import Toast from "../../molecules/Toast";

const CorrectOptions = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];
const AddQuizzes = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    const payload = {
      question: e.question,
      options: [e?.option_1, e?.option_2, e?.option_3, e?.option_4],
      correct_option: e.correct_option?.value,
    };
    try {
      await quizService.addQuiz(payload);
      Toast({
        type: "success",
        message: "Quiz added successfully",
      });
      form.setFieldsValue({
        question: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        correct_option: "",
      });
      setLoading(false);
    } catch (error) {
      Toast({
        type: "error",
        message: error.message,
      });
      setLoading(false);
    }
  };
  return (
    <AddQuizWrapper>
      <div className="col col-1">
        <div className="heading-text">
          <h1>Create a New Quiz</h1>
          <p>
            Add all the necessary details below to upload a quiz for your users.
          </p>
        </div>
        <Form form={form} onSubmit={handleSubmit} className="form-wrap">
          <Form.Item
            label="Question"
            type="text"
            name="question"
            lg
            placeholder="Enter the question"
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Option 1"
            type="text"
            name="option_1"
            lg
            placeholder="Enter Option 1"
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Option 2"
            type="text"
            name="option_2"
            lg
            placeholder="Enter Option 2"
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Option 3"
            type="text"
            name="option_3"
            lg
            placeholder="Enter Option 3"
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Option 4"
            type="text"
            name="option_4"
            lg
            placeholder="Enter Option 4"
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Correct Option"
            type="select"
            name="correct_option"
            lg
            options={CorrectOptions}
            placeholder="Select Correct Option"
          >
            <Field />
          </Form.Item>
          <Button variant="primary" loader={loading}>
            Submit
          </Button>
        </Form>
      </div>
      <div className="col col-2">
        <img src={AddQuizImage} alt="AddQuizImage" />
      </div>
    </AddQuizWrapper>
  );
};

export default AddQuizzes;
