import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const iconRef = useRef(null); 

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isIconMoved, setIsIconMoved] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }

    if (iconRef.current) {
      if (!isIconMoved) {
        iconRef.current.classList.add("move-icon");
        setIsIconMoved(true); 
      } else {

        iconRef.current.classList.remove("move-icon");
        setIsIconMoved(false); 
      }
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
        <div className="theme" ref={iconRef}>
          <FontAwesomeIcon 
            icon={isDarkMode ? faSun : faMoon}
            onClick={toggleTheme}
            className="icon"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
