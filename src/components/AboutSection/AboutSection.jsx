import React from 'react'
import "./AboutSection.scss"

const AboutSection = () => {

    return (
        <section className="about-section">

            <p className="about-section__text firstP">
            Ciao! I'm <b>Alessandro</b>, a London-based, Italian Software Engineer with a passion for <em><b>clean, minimalist design</b></em>.</p>

            <p className="about-section__text">
            I fell in love with web development &#38; design when I was just 12 years-old and I started building my first few web pages using a software called <em>Microsoft FrontPage</em>.</p>

            <p className="about-section__text">
            <b>My tech stack</b><br/> 
            <em>HTML / CSS / SASS / SCSS / JAVASCRIPT / REACT /
            GSAP / GITHUB / GIT / JAVA / MYSQL / FIGMA / ADOBE XD</em></p>

            <p className="about-section__text">
            <em>Check out my projects </em> <i className="fas fa-chevron-down"></i> </p>

        </section>
    )
}

export default AboutSection
