import React from "react";
import { useNavigate} from "react-router-dom"; 
import "../App.css";

function Navbar() {
  const navigate = useNavigate(); 

  const handleOptionClick = (targetId) => {
    navigate(`/${targetId}`); 
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="option-container">
          <span className="option-item" onClick={() => handleOptionClick('readme')}>Readme</span>
          <span className="option-item" onClick={() => handleOptionClick('changelog')}>Changelog</span>
          <span className="option-item" onClick={() => handleOptionClick('projects')}>Projects</span>
          <span className="option-item" onClick={() => handleOptionClick('stack')}>Stack</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
