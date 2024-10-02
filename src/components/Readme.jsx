import React from "react";
import "../App.css";

function Readme() {
  const handleGithubClick = () => {
    window.open(`https://github.com/aymhmt`, "_blank"); 
  };

  const handleLinkedinClick = () => {
    window.open(`www.linkedin.com/in/muhammet-ay-067701274`, "_blank"); 
  };

  return (
    <div className="Readme">
      <div className="light"></div>
      <div className="read-me">
        <h1 className="name">Muhammet Ay</h1>
        <h1 className="desc">Computer Engineer & Developer</h1>
        <p>Hi 👋🏻, I am currently working on developing my own projects to expand my portfolio
          <br />  and trying to adapt to the industry by using new technologies.
        </p>

        <p>As a third-year computer engineering student who loves coding,
          <br/>I have gained various experiences in web, mobile, and many other fields,
          <br/>both big and small. I am a determined and ambitious developer who enjoys self-improvement.
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
                linkedin sayfası.
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
        <h1>Career</h1>
        <p>Overall I have 2+ years of experience in software development.</p>
        <div className="career-box">
          <div className="career-content">
            <div className="info">
              <p>Karaman, Turkey</p>
              <p className="date">2022 - 2026</p>
            </div>
            <div className="info-two">
              <h3>Computer Engineer Student</h3>
              <p>Şuan da Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim.</p>
            </div>
          </div>
        </div>
        <div className="career-box">
          <div className="career-content">
            <div className="info">
              <p>Karaman, Turkey</p>
              <p className="date">2022 - 2026</p>
            </div>
            <div className="info-two">
              <h3>Computer Engineer Student</h3>
              <p>Şuan da Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim.</p>
            </div>
          </div>
        </div>
        <div className="career-box">
          <div className="career-content">
            <div className="info">
              <p>Karaman, Turkey</p>
              <p className="date">2022 - 2026</p>
            </div>
            <div className="info-two">
              <h3>Computer Engineer Student</h3>
              <p>Şuan da Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim.</p>
            </div>
          </div>
        </div>
        <div className="career-box">
          <div className="career-content">
            <div className="info">
              <p>Karaman, Turkey</p>
              <p className="date">2022 - 2026</p>
            </div>
            <div className="info-two">
              <h3>Computer Engineer Student</h3>
              <p>Şuan da Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim.</p>
            </div>
          </div>
        </div>
        <div className="career-box">
          <div className="career-content">
            <div className="info">
              <p>Karaman, Turkey</p>
              <p className="date">2022 - 2026</p>
            </div>
            <div className="info-two">
              <h3>Computer Engineer Student</h3>
              <p>Şuan da Kmu' de bilgisayar mühendisliği bölümü 3. sınıf öğrencisiyim.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Readme;
