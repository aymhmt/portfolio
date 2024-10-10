import React, { useState} from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun as solidSunBright } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  };

  const handleOptionClick = (targetId) => {
    navigate(`/${targetId}`);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="option-container">
            <span className="option-item" onClick={() => handleOptionClick('readme')}>Readme</span>
            <span className="option-item" onClick={() => handleOptionClick('changelog')}>Changelog</span>
            <span className="option-item" onClick={() => handleOptionClick('projects')}>Projects</span>
            <span className="option-item" onClick={() => handleOptionClick('stack')}>Stack</span>
          </div>
        </nav>
        <div className="theme">
          <FontAwesomeIcon 
            icon={isDarkMode ? solidSunBright : solidMoon}
            onClick={toggleTheme}
            className="icon"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
