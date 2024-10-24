import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../wwwroot/css/Footer.css';
import Navbar from "./Navbar.jsx";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <Navbar/>
            <div className="footer-span">
                    <p>Copyright 2024 - 2025, Mami.</p>
            </div>
        </footer>
    );
}

export default Footer;


