import React from 'react'
import "./ContactSection.scss"

const ContactSection = () => {
    return (
        <section className="contact-section">

            <h2 className="contact-section__headline">Let's Connect!</h2>

            <h3 className="contact-section__contacts">Want to get in touch? <a className="contact-section__contacts--link" href="">Send me an email</a><br />Or connect with me on <a className="contact-section__contacts--link" href="">LinkedIn</a> or <a className="contact-section__contacts--link" href="">Github</a></h3>

        </section>
    )
}

export default ContactSection
