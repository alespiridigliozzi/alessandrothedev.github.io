import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import "./AboutSection.scss"

const AboutSection = () => {

    return (
        <section className="about-section">

            <h2 className="about-section__heading">Hello there<br />My name is Alessandro</h2>

            <p className="about-section__subheading">I am a Software Engineer with a passion for clean, minimalist design.<br />My philosophy? <span className="about-section__subheading--bolder">K</span>eep <span className="about-section__subheading--bolder">I</span>t <span className="about-section__subheading--bolder">S</span>imple <span className="about-section__subheading--bolder">S</span>tupid!
            </p>
            
            <Link to="/projects">
                <div>
                 <Button buttonText="See My Work"/>
                </div>
            </Link>

        </section>
    )
}

export default AboutSection
