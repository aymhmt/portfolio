import React from "react";
import "../App.css";

function Projects(){
    return(
        <>
        <div className="projects">
            <div className="light"></div>
            <div className="projects-container">
                <h1>Projects</h1>
                <p>I've worked on a range of projects over the years—some as hobbies,
                <br/>others as proof of concept, and a few to solve my own challenges.</p>
                <div className="projects-box">
                    <h3>Query</h3>
                    <p>Location chat & followers app</p>
                    <div className="link-container">
                        <div className="extra">
                            <span>Stars</span>
                            <span>Forks</span>
                        </div>
                        <div className="link">                    
                            <span>Web Site</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className="projects-box">
                    <h3>Yolyardım App</h3>
                    <p>Yolda kalan araçlar için yol yardım çağırmasını sağlayan bir webapp.</p>
                    <div className="link-container">
                        <div className="extra">
                            <span>Stars</span>
                            <span>Forks</span>
                        </div>
                        <div className="link">                    
                            <span>Web Site</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className="projects-box">
                    <h3>Dancer App</h3>
                    <p>Dansöz kiralamanızı sağlayan bir web & mobil app.</p>
                    <div className="link-container">
                        <div className="extra">
                            <span>Stars</span>
                            <span>Forks</span>
                        </div>
                        <div className="link">                    
                            <span>Web Site</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className="projects-box">
                    <h3>Code App</h3>
                    <p>Parfümlerin muadillerinin kodlarını içeren web site.</p>
                    <div className="link-container">
                        <div className="extra">
                            <span>Stars</span>
                            <span>Forks</span>
                        </div>
                        <div className="link">                    
                            <span>Web Site</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className="projects-box">
                    <h3>Psikolog Ai</h3>
                    <p>Ai tabanlı bir psikolog web site.</p>
                    <div className="link-container">
                        <div className="extra">
                            <span>Stars</span>
                            <span>Forks</span>
                        </div>
                        <div className="link">                    
                            <span>Web Site</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects