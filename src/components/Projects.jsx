import React from "react";
import "../App.css";

function Projects() {
  const projects = [
    {
      title: "Spotify App",
      description: "Kullanıcıların trend olan şarkı & podcast dinlemesini sağlayan web arayüz tasarımı.",
      webUrl: "https://spotify-app-ochre-two.vercel.app",
      repoUrl: "https://github.com/aymhmt/spotifyApp"
    },
    {
      title: "Netflix App",
      description: "Netflix benzeri UI tasarımı olan web arayüzü.",
      webUrl: "#",
      repoUrl: "#"
    }
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
      <div className="projects-container">
        <div className="light"></div>
        <div className="projects">
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
                <div className="link">
                  <button onClick={() => openLink(project.webUrl)}>Web</button>
                  <button onClick={() => openLink(project.repoUrl)}>GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Projects;
