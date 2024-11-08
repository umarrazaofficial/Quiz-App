import React, { useState } from "react";
import OnboardingTemplate from "../OnboardingTemplate";
import { FormContent } from "./SignUp.styles";
import Button from "../../molecules/Button";
import Form, { useForm } from "../../molecules/Form";
import Field from "../Field";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "../../../Context/authContext";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import adminService from "../../../services/adminService";
import Toast from "../../molecules/Toast";

function SignUp() {
  const [form] = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const payload = {
        email: e?.email.trim(),
        password: e?.password.trim(),
        name: e?.name.trim(),
      };
      await adminService.signUp(payload);
      setLoading(false);
      navigate("/thank-you");
    } catch (error) {
      Toast({ type: "error", message: error });
      setLoading(false);
    }
  };

  return (
    <Layout showTemplate={false}>
      <OnboardingTemplate>
        <FormContent>
          <div className="heading-text">
            <h1>Let&apos;s Sign Up</h1>
            <p>Please fill the details below to register your account.</p>
          </div>
          <Form form={form} onSubmit={handleSubmit}>
            <Form.Item
              label="Name"
              type="text"
              rounded
              name="name"
              lg
              placeholder="Enter Name"
              rules={[
                {
                  required: true,
                  message: "Name is Required",
                },
              ]}
            >
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item
              label="Email Address"
              type="email"
              rounded
              name="email"
              lg
              placeholder="Enter Email Address"
              rules={[
                {
                  required: true,
                  message: "Email is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
            <Form.Item
              label="Password"
              type="password"
              rounded
              name="password"
              lg
              placeholder="Enter Password"
              rules={[
                {
                  required: true,
                  message: "Password is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>

            <div className="btn-holder">
              <Button loader={loading} variant="primary" width="256px">
                Register
              </Button>
              <Button
                variant="white"
                width="256px"
                onClick={() => navigate("/sign-in")}
              >
                Login
              </Button>
            </div>
          </Form>
        </FormContent>
      </OnboardingTemplate>
    </Layout>
  );
}

export default SignUp;
