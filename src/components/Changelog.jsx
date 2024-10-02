import React from "react"
import "../App.css";

function Changelog(){
    return(
        <div className="changelog-container">
            <div className="light"></div>
            <div className="changelog">
                <h1>Changelog</h1>
                <p>Here you can find the major updates and changes to my life.</p>
                <div className="line-container">
                    <div className="title-container">
                    <div className="emoji">🚀</div>
                        <p>Visit to Karaman - University</p>
                        <p>2022-2026</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="line-container">
                    <div className="title-container">
                    <div className="emoji">🚀</div>
                        <p>Visit to Kahramanmaraş - Dersane</p>
                        <p>2021-2022</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="line-container">
                    <div className="title-container">
                    <div className="emoji">🚀</div>
                        <p>Visit to Kahramanmaraş - Lise</p>
                        <p>2017-2021</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="line-container">
                    <div className="title-container">
                    <div className="emoji">🚀</div>
                        <p>Visit to Kahramanmaraş - Ortaokul</p>
                        <p>2013-2017</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="line-container">
                    <div className="title-container">
                    <div className="emoji">🚀</div>
                        <p>Visit to Kahramanmaraş - İlkokul</p>
                        <p>2009-2013</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Changelog