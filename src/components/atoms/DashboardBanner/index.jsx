import React from "react";
import { DashboardBannerWrapper } from "./DashboardBanner.style";
import dashboardBanner from "../../../assets/banner.png";
import Button from "../../molecules/Button";
import { useNavigate } from "react-router-dom";

const DashboardBanner = () => {
  const navigate = useNavigate();
  return (
    <DashboardBannerWrapper>
      <div className="col col-1">
        <h2 className="heading">Gain new knowledge for each question</h2>
        <span className="desc">
          We help you expand your knowledge of the world through engaging
          quizzes. Covering various topics, our trivia challenges let you test
          your knowledge while discovering new facts. Join us and explore the
          world, one quiz at a time!
        </span>
        <Button
          variant="primary"
          width="150px"
          onClick={() => navigate("/quiz")}
        >
          Start Solving
        </Button>
      </div>
      <div className="col col-2">
        <img src={dashboardBanner} alt="DashboardBanner" />
      </div>
    </DashboardBannerWrapper>
  );
};

export default DashboardBanner;
