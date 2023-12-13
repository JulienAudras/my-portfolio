import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import github from '../images/github.png'

const Contact = () => {
    return (
        <section className="contact">
            <a href="https://fr.linkedin.com/in/julien-audras-24a817208?" target="_blank" rel="noreferrer" className="contact__link">
                <img src={linkedin} alt="LinkedIn" className="contact__link--img" />
            </a>
            <a href="mailto:audras.julien@gmail.com" target="_blank" rel="noreferrer" className="contact__link">
                <img src={email} alt="Email" className="contact__link--img" />
            </a>
            <a href="https://github.com/JulienAudras" target="_blank" rel="noreferrer" className="contact__link">
                <img src={github} alt="GitHub" className="contact__link--img" />
            </a>
        </section>
    )
}

export default Contact