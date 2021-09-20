import React from 'react';
import { links } from '../portfolio';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import "./contact.css"

const Contact = () => {
    return <div className="contact" id="contact">
        <h1 className="contact-title">
            <Fade bottom cascade duration={2500}>Reach Out To Me!</Fade>
        </h1>
        <div className="icon">
            {links.map((link) => <div className="icons"> <SocialIcon url={link} /> </div>)}
        </div>
        <center>
            <hr className="style-f" />
        </center>
        <p className="copyright">© 2021 - Template developed by Durai shanmugaraj</p>
    </div >
}

export default Contact