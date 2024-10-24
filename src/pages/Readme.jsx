import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../wwwroot/css/App.css";

function Readme() {
  const handleGithubClick = () => {
    window.open(`https://github.com/aymhmt`, "_blank"); 
  };

  const handleLinkedinClick = () => {
    window.open(`https://www.linkedin.com/in/muhammet-ay-067701274`, "_blank"); 
  };

  const careerData = [
    {
      location: "Karaman, Turkey",
      date: "2022 - 2026",
      title: "Computer Engineer Student",
      description: "Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim."
    },
  ];

  return (
    <div className="Readme-container">
      <div className="light"></div>
      <div className="read-me">
        <img src="anime.png" alt="mami" />
        <h1 className="name">Muhammet Ay</h1>
        <h1 className="desc">Computer Engineer & <span>Ai Developer</span></h1>
        <p>
        Hello 👋🏻, I am currently working on small-scale projects to improve myself. This way, I am both enhancing my skills and expanding my network. I am striving to become a suitable professional for the industry.
        </p>
        <p>
        As a third-year computer engineering student with a passion for coding, I have gained diverse experiences across web, mobile, and various other fields, both large and small. I am a determined and ambitious developer who enjoys continuous self-improvement.
        </p>
      </div>

      <div className="spotlight">
        <h1>Spotlight</h1>
        <p>My repository and links.</p>

        <div className="custom-box-container">
          <div className="custom-box" onClick={handleGithubClick}>
            <div className="custom-content">
              <div className="logo">
                <FontAwesomeIcon icon={faGithub} /> 
              </div>
              <h5>Open Source</h5>
              <p>The GitHub page where <br/>
              I share open-source code.
              </p>
              <span className="visit-link">Visit</span>
              <span className="arrow">&rarr;</span>
            </div>
            <div className="hover-windows">
              <div className="small-window one"></div>
              <div className="small-window two"></div>
            </div>
          </div>
          <div className="custom-box" onClick={handleLinkedinClick}>
            <div className="custom-content">
              <div className="logo">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <h5>Linkedin</h5>
              <p>The LinkedIn page with
                <br/> my corporate identity.
              </p>
              <span className="visit-link">Visit</span>
              <span className="arrow">&rarr;</span>
            </div>
            <div className="hover-windows">
              <div className="small-window one"></div>
              <div className="small-window two"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="career">
        <h1>Now</h1>
        <p>A developer can do anything :/</p>

        {careerData.map((career, index) => (
          <div className="career-box" key={index}>
            <div className="career-content">
              <div className="info">
                <p>{career.location}</p>
                <p className="date">{career.date}</p>
              </div>
              <div className="info-two">
                <h3>{career.title}</h3>
                <p>{career.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Readme;
