import React from "react";
import "../App.css";

function Projects() {
  const projects = [
    {
      title: "Music App",
      description: "Kullanıcıların trend olan şarkı & podcast dinlemesini sağlayan web app.",
      webUrl: "https://spotify-app-ochre-two.vercel.app",
      repoUrl: "https://github.com/aymhmt/spotifyApp"
    },
    {
      title: "Yolyardım App",
      description: "Yolda kalan araçlar için yol yardım çağırmasını sağlayan bir webapp.",
      webUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Dancer App",
      description: "Dansöz kiralamanızı sağlayan bir web & mobil app.",
      webUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Code App",
      description: "Parfümlerin muadillerinin kodlarını içeren web site.",
      webUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Psikolog Ai",
      description: "Ai tabanlı bir psikolog web site.",
      webUrl: "#",
      repoUrl: "#"
    }
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="projects">
        <div className="light"></div>
        <div className="projects-container">
          <h1>Projects</h1>
          <p>
            I've worked on a range of projects over the years—some as hobbies,
            <br />
            others as proof of concept, and a few to solve my own challenges.
          </p>
          {projects.map((project, index) => (
            <div className="projects-box" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="link-container">
                <div className="extra">
                  <span>Stars</span>
                  <span>Forks</span>
                </div>
                <div className="link">
                  <button onClick={() => openLink(project.webUrl)}>Web Site</button>
                  <button onClick={() => openLink(project.repoUrl)}>GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
