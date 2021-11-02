import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import "./AboutSection.scss"

const AboutSection = () => {

    return (
        <section className="about-section">

            <h2 data-aos="fade-up" data-aos-easing="ease-in-sine"
            className="about-section__heading">Hello there<br />My name is Alessandro</h2>

            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50"
            className="about-section__subheading">I am a Software Engineer with a passion for clean, minimalist design.<br />My philosophy? <span className="about-section__subheading--bolder">K</span>eep <span className="about-section__subheading--bolder">I</span>t <span className="about-section__subheading--bolder">S</span>imple <span className="about-section__subheading--bolder">S</span>tupid!
            </p>
            
            <Link to="/projects">
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                 <Button buttonText="See My Work"/>
                </div>
            </Link>

        </section>
    )
}

export default AboutSection
