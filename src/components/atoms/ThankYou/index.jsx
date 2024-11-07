import React, { useEffect, useRef, useState } from "react";
import OnboardingTemplate from "../OnboardingTemplate";
import { FormContent } from "./ThankYou.styles";
import Button from "../../molecules/Button";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Tick from "../../../assets/tickmark.json";

function ThankYou() {
  const playerRef = useRef(null);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause();
        setIsActive(true);
      }
    }, 3750);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Layout showTemplate={false}>
      <OnboardingTemplate>
        <FormContent isActive={isActive}>
          <div className="animation">
            <Player
              ref={playerRef}
              autoplay={true}
              loop={false}
              src={Tick}
              className="img"
            />
          </div>

          <h2 className="thank-you-text">
            Thank <span>You</span>
          </h2>

          <p className="description">
            Thank you for registering! Your account is ready, and you can now
            log in to get started.
          </p>

          <div className="btn-holder">
            <Button
              variant="light-primary"
              width="256px"
              onClick={() => navigate("/sign-in")}
            >
              Log in
            </Button>
          </div>
        </FormContent>
      </OnboardingTemplate>
    </Layout>
  );
}

export default ThankYou;
