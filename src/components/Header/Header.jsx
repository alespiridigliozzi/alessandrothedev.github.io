import React from 'react'
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">

            <h1 className="header__headline">
                <div className="header__title">
                    <span className="header__subtitle">Ciao! I'm Alessandro.</span>
                </div>
                <div className="header__title">
                    <span>A Software Engineer with a passion for clean, minimalist design.</span>
                </div>
            </h1>

            <div className="header__scroll-down">
                <p className="header__scroll-down--p">Scroll Down</p>
                <span className="header__scroll-down--bar"></span>
            </div>

        </header>
    )
}

export default Header
