import React, { useEffect, useRef } from "react";
import { StyledHeader } from "./Header.styles";
import { CgMenuLeft } from "react-icons/cg";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "../../../Context/authContext";
import { getCookie } from "../../../helpers/common";
import logo from "../../../assets/Logo.png";
import logout from "../../../assets/logout.svg";
import addIcon from "../../../assets/addIcon.svg";
import startIcon from "../../../assets/startIcon.svg";
import profile from "../../../assets/profile.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const name = getCookie("name");
  const isAdmin = getCookie("admin");
  const { onLogout } = useContextHook(AuthContext, ["onLogout"]);

  function showAside() {
    document.body.classList.toggle("aside-active");
    if (document.body.classList.contains("aside-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <StyledHeader>
      <div className="logo" onClick={() => navigate("/dashboard")}>
        <img src={logo} alt="logo" />
      </div>
      <div className="col-2">
        <div className="nav-links">
          <NavLink to="/quiz">
            <img src={startIcon} alt="startIcon" />
            Start Quiz
          </NavLink>
          {isAdmin && (
            <NavLink to="/add-quiz">
              <img src={addIcon} alt="addIcon" />
              Add Quiz
            </NavLink>
          )}
          <NavLink
            onClick={() => onLogout()}
            to={"/sign-in"}
            className="logout"
          >
            <img src={logout} alt="logout" /> Logout
          </NavLink>
        </div>
        <div className="profile">
          <div className="pic">
            <Player
              ref={playerRef}
              autoplay={true}
              loop={false}
              src={profile}
              className="img"
            />
          </div>
          <div className="body">
            <span className="greeting">Good Morning!</span>
            <span className="name">{name ? name : "Guest User"}</span>
          </div>
        </div>
        <div className="hamburger" onClick={showAside}>
          <CgMenuLeft size={25} color="var(--primary)" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
