import React from 'react'
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">There is beauty<br/>in <span className="header__title--italic">simplicity</span>.</h1>
            <div className="header__scroll-down">
                <p className="header__scroll-down--p">Scroll Down</p>
                <span className="header__scroll-down--bar"></span>
            </div>
        </div>
    )
}

export default Header
