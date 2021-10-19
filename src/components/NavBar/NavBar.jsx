import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <a href="">Projects</a>
                <a href=""><span className="navbar__logo">Alessandro</span></a>
                <a href="">About Me</a>
            </nav>
        </div>
    )
}

export default NavBar
