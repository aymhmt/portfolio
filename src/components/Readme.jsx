import React from "react";
import "../App.css";

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
    <div className="Readme">
      <div className="light"></div>
      <div className="read-me">
        <img src="anime.png" alt="mami" />
        <h1 className="name">Muhammet Ay</h1>
        <h1 className="desc">Computer Engineer & <span>Ai Developer</span></h1>
        <p>
          Hi 👋🏻, I am currently working on developing my own projects to expand my portfolio
          <br /> and trying to adapt to the industry by using new technologies.
        </p>
        <p>
          As a third-year computer engineering student who loves coding,
          <br />I have gained various experiences in web, mobile, and many other fields,
          <br />both big and small. I am a determined and ambitious developer who enjoys self-improvement.
        </p>
      </div>

      <div className="spotlight">
        <h1>Spotlight</h1>
        <p>Repo ve bağlantı linklerim.</p>

        <div className="custom-box-container">
          <div className="custom-box" onClick={handleGithubClick}>
            <div className="custom-content">
              <h5>GitHub</h5>
              <p>Açık kaynaklı kodlar paylaştığım
                <br />
                GitHub sayfası.
              </p>
              <span className="visit-link">Ziyaret</span>
              <span className="arrow">&rarr;</span>
            </div>
            <div className="hover-windows">
              <div className="small-window one"></div>
              <div className="small-window two"></div>
            </div>
          </div>
          <div className="custom-box" onClick={handleLinkedinClick}>
            <div className="custom-content">
              <h5>Linkedin</h5>
              <p>Kurumsal kimliğimin bulunduğu
                <br />
                LinkedIn sayfası.
              </p>
              <span className="visit-link">Ziyaret</span>
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
        <p>Overall I have 2+ years of experience in software development.</p>

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
