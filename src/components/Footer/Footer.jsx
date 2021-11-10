import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo"><Link to="/">Alessandro</Link></div>
            <div className="footer__links">
                <a href="./assets/cv/alessandro_spiridigliozzi_cv_2022.pdf">CV</a> / <a href="mailto:spiridigliozzi.alessandro@gmail.com">Email</a> / <a href="https://www.linkedin.com/in/alessandrospiridigliozzi/" target="_blank" rel="noreferrer">LinkedIn</a> / <a href="https://github.com/alessandrothedev" target="_blank" rel="noreferrer">Github</a>
                </div>
        </footer>
    )
}

export default Footer
