import React from "react";

function Stack(){
    return(
        <div className="stack-container">
            <div className="light"></div>
            <h1>Stack</h1>
            <p>The technologies & products I use daily for building projects and managing my life.</p>
            <h2>Desk</h2>
            <p>The devices I carry with me daily to work and around the city.</p>
            <div className="stack-content">
                <div className="stack">
                    <div className="comp">
                        <span>Phone</span>
                        <p>Iphone 13</p>
                    </div>
                <div className="line"></div>
                    <div className="comp">
                        <span>Laptop</span>
                        <p>Macbook Air M1</p>
                    </div>
                <div className="line"></div>
                    <div className="comp">
                        <span>Kulaklık</span>
                        <p>AirPods 2.nesil</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack