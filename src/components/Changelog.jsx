import React from "react";
import "../App.css";

function Changelog() {
    const events = [
        { emoji: "🚀", title: "Visit to Karaman - University", year: "2022-2026" },
        { emoji: "🚀", title: "Visit to Kahramanmaraş - Dersane", year: "2021-2022" },
        { emoji: "🚀", title: "Visit to Kahramanmaraş - Lise", year: "2017-2021" },
        { emoji: "🚀", title: "Visit to Kahramanmaraş - Ortaokul", year: "2013-2017" },
        { emoji: "🚀", title: "Visit to Kahramanmaraş - İlkokul", year: "2009-2013" },
    ];

    return (
        <div className="changelog-container">
            <div className="light"></div>
            <div className="changelog">
                <h1>Changelog</h1>
                <p>Here you can find the major updates and changes to my life.</p>
                {events.map((event, index) => (
                    <div className="line-container" key={index}>
                        <div className="title-container">
                            <div className="emoji">{event.emoji}</div>
                            <p>{event.title}</p>
                            <p>{event.year}</p>
                        </div>
                        {index !== events.length - 1 && <div className="vertical-line"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Changelog;
