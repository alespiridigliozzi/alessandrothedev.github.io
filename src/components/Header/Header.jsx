import React from 'react'
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">

            <h1 className="header__headline">
                <div className="header__title">
                    <span>There is beauty</span>
                </div>
                <div className="header__title">
                    <span>in <span className="header__title--italic">simplicity</span>.</span>
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
