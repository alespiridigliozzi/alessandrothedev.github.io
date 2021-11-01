import React from 'react'
import "./ContactSection.scss"

const ContactSection = () => {
    return (
        <section className="contact-section">

            <h2 data-aos="fade-up" data-aos-easing="ease-in-sine"
            className="contact-section__headline">Let's Connect!</h2>

            <h3 data-aos="fade-up" data-aos-easing="ease-in-sine"
            className="contact-section__contacts">Want to get in touch? <a className="contact-section__contacts--link" href="mailto:spiridigliozzi.alessandro@gmail.com">Send me an email</a></h3>
            
            <h3 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="50"
            className="contact-section__contacts">Or connect with me on <a href="https://www.linkedin.com/in/alessandrospiridigliozzi/" target="_blank" className="contact-section__contacts--link">LinkedIn</a> or <a href="https://github.com/alessandrothedev" target="_blank" className="contact-section__contacts--link">Github</a></h3>

        </section>
    )
}

export default ContactSection
