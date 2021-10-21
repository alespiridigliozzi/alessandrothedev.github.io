import React from 'react'
import "./About.scss"

const About = () => {
    return (
        <section className="about-page">

            <h2 className="about-page__heading">Ciao! My name is Alessandro.</h2>

            <p className="about-page__content">
                I am a London-based, Italian Software Engineer with a passion for <em><b>clean, minimalist design</b></em>.<br /><br />

                I fell in love with web design when I was just 12 years-old and I started building simple web pages using a software called <em>Microsoft FrontPage</em>.<br /><br />

                During my university years, I had little to no free time on my schedule, so I had to put web development aside. But since I moved to London in 2016, the urge to start coding again became stronger and stronger, until there was nothing else I could think about!<br /><br />

                Outside of work, I love watching films and tv shows, reading about design and tech, and chill out at home listening to music and cooking. I am really passionate about travelling and try to visit new places whenever I have the opportunity.<br /><br />

                Want to know more about me? <a className="about-page__content--link" href="mailto:spiridigliozzi.alessandro@gmail.com">Send me an email</a>.<br />Or connect with me on <a href="https://www.linkedin.com/in/alessandrospiridigliozzi/" target="_blank" className="about-page__content--link">LinkedIn</a> or <a href="https://github.com/alessandrothedev" target="_blank" className="about-page__content--link">Github</a>.
            </p>
            <br /><br /><br /><br />

            <h3 className="about-page__subheading">My Tech Skills</h3>

            <p className="about-page__subheading-content">HTML / CSS / JAVASCRIPT / SCSS / REACT JS / JAVA / GIT / UI DESIGN</p>

        </section>
    )
}

export default About
