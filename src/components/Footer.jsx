import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-line"></div>
            <div className="social">
                <a href="https://www.instagram.com/aymhmt_" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> 
                </a>
                <a href="https://github.com/aymhmt" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> 
                </a>
                <a href="https://www.linkedin.com/in/muhammet-ay-067701274" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div className="footer-span">
                    <p>Copyright 2024 - 2025, Mami.</p>
            </div>

        </div>
    );
}

export default Footer;
