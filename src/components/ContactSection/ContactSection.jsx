import React from 'react'
import "./ContactSection.scss"

const ContactSection = () => {

    return (
        <section className="contact-section">

            <h2 className="contact-section__text">Want to get in touch? <a className="contact-section__text--link" href="mailto:spiridigliozzi.alessandro@gmail.com">Send me an email</a></h2>
            
            <h2 className="contact-section__text">Or connect with me on <a href="https://www.linkedin.com/in/alessandrospiridigliozzi/" target="_blank" className="contact-section__text--link">LinkedIn</a> or <a href="https://github.com/alessandrothedev" target="_blank" className="contact-section__text--link">Github</a></h2>

        </section>
    )
}

export default ContactSection
