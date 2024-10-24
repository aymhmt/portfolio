import React from "react";
import "../wwwroot/css/App.css";

function Stack(){
    return(
        <div className="stack-container">
            <div className="light"></div>
            <h1>Stack</h1>
            <p>The technologies & products I use daily for building projects and managing my life.</p>
            <h2>Desk</h2>
            <p>The essentials of a computer engineer: a calculator and a laptop. 👨🏻‍💻</p>
            <div className="stack-content">
                <div className="stack">
                    <img src="desktop.jpg" alt="#"></img>
                </div>
            </div>
        </div>
    );
}

export default Stack