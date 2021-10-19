import React from 'react'
import Button from '../Button/Button'
import "./AboutSection.scss"

const AboutSection = () => {
    return (
        <section class="about-section">

            <h2 class="about-section__heading">Hello there<br />My name is Alessandro</h2>

            <p class="about-section__subheading">I am a Software Engineer with a passion for clean, minimalist design.<br />My philosophy? <span class="about-section__subheading--bolder">K</span>eep <span class="about-section__subheading--bolder">I</span>t <span class="about-section__subheading--bolder">S</span>imple <span class="about-section__subheading--bolder">S</span>tupid!
            </p>
            
            <Button buttonText="See My Work"/>

        </section>
    )
}

export default AboutSection
