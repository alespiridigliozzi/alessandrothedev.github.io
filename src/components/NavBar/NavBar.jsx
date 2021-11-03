import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <Link to="/"><span className="navbar__logo">Alessandro</span></Link>
            </nav>
        </div>
    )
}

export default NavBar
