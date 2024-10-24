import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../wwwroot/css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [themeState, setThemeState] = useState("theme");
  const [systemTheme, setSystemTheme] = useState("light");
  const [activeOption, setActiveOption] = useState("");

  const updateSystemTheme = (prefersDark) => {
    const theme = prefersDark ? "dark" : "light";
    setSystemTheme(theme);

    if (themeState === "theme") {
      document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateSystemTheme(mediaQuery.matches);

    const handleChange = (e) => updateSystemTheme(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeState]);

  const toggleTheme = () => {
    let newTheme;

    if (themeState === "theme") {
      newTheme = "moon";
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else if (themeState === "moon") {
      newTheme = "sun";
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      newTheme = "theme";
      document.body.className = systemTheme === "dark" ? "dark-mode" : "light-mode";
    }

    setThemeState(newTheme);
  };

  const handleOptionClick = (targetId) => {
    setActiveOption(targetId);

    // "contact" seçeneği için mailto bağlantısı
    if (targetId === "contact") {
      window.location.href = "mailto:aymuhammett@icloud.com";
    } else {
      navigate(`/${targetId}`);
    }
  };

  return (
    <div className="navbar-container2">
      <nav className="navbar2">
        <div className="option-container2">
          {["readme", "about", "projects", "stack", "contact"].map((option) => (
            <span
              key={option}
              className={`option-item2 ${activeOption === option ? "active" : ""}`}
              onClick={() => handleOptionClick(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </span>
          ))}
        </div>
      </nav>
      <button onClick={toggleTheme} className="icon-button">
        <img
          src={`${process.env.PUBLIC_URL}/${themeState}.svg`}
          alt={`${themeState} Icon`}
          className={`icon-image ${themeState}`}
        />
      </button>
    </div>
  );
}

export default Navbar;
