import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutSection.scss"

const AboutSection = () => {

    return (
        <section className="about-section">

            <p className="about-section__text">
            I fell in love with web development &#38; design when I was just 12 years-old and I started building my first few web pages using a software called <em>Microsoft FrontPage</em>.</p>

            <p className="about-section__text">
            <b>My tech stack includes:</b><br/> 
            <em>HTML / CSS / SCSS / JAVASCRIPT / REACT / GITHUB / GIT / FIGMA / ADOBE XD</em></p>

            <p className="about-section__text">
            <b>I am currently learning:</b><br/> 
            <em>UX DESIGN / JAVA / MYSQL / REDUX / TYPESCRIPT</em></p>

        </section>
    )
}

export default AboutSection
