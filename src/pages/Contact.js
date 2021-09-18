import React from 'react';
import "./contact.css"
import { SocialIcon } from 'react-social-icons';


const links = ["https://www.linkedin.com/in/durai-shanmugaraj-r-050313192/",
    "https://github.com/duraishanmugaraj",
    "https://www.instagram.com/__durairaj__/?hl=en"]

const Contact = () => {
    return <div className="contact">
        <h1 className="contact-title">Reach Out To Me!</h1>
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