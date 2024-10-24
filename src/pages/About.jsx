import React from "react";
import "../wwwroot/css/App.css";

function About() {
    const languages = ["JavaScript", "Python", "C#"];
    const frameworks = ["React", "Firebase", "Node.js", "Asp.net Core"];
    const extras = ["GitHub", "Figma", "VSCode", "DataBase"];

    const achievements = [
        { emoji: "🎓", title: "Computer Engineering - Bachelor's Degree", year: "2022-2026"},
    ];
    const experiences = [
        { emoji: "👨🏻‍💻", title: "I have been working for 2 years as a web developer", year: "2023-present"},
    ];

    return (
        <div className="about-container">
            <div className="light"></div>
            <div className="header">
                <h1>About Me</h1>
                <p>Hi! I'm Muhammet, a passionate developer focusing on mobile and web technologies.</p>
            </div>

            <section className="section">
            <ul>
            <h2>Languages</h2>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>

            <ul>
            <h2>Frameworks/Tools</h2>
                {frameworks.map((framework, index) => (
                    <li key={index}>{framework}</li>
                ))}
            </ul>

            <ul>
            <h2>Extras</h2>
                {extras.map((extra, index) => (
                    <li key={index}>{extra}</li>
                ))}
            </ul>
            </section>

            <section className="section2">
                <h2>Achievements</h2>
                {achievements.map((achievement, index) => (
                    <div key={index} className="achievement">
                        <span className="emoji">{achievement.emoji}</span>
                        <p>{achievement.title} ({achievement.year})</p>
                    </div>
                ))}
            </section>

            <section className="section3">
                <h2>Experiences</h2>
                {experiences.map((experience, index) => (
                    <div key={index} className="experience">
                        <span className="emoji">{experience.emoji}</span>
                        <p>{experience.title} ({experience.year})</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default About;
