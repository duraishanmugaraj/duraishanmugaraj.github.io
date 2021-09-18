import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import wiz from "../components/Animation/wiz-min.jpg"
import "./Aboutme.css"

function Aboutme() {
    return (
        <section className="aboutme">
            <Reveal effect="fadeInUp" duration={3000}>
                <h1 className="title" >
                    <Fade bottom cascade>
                        About ME
                    </Fade>
                </h1>
            </Reveal>
            <div className="fluid-container">
                <div className="row">
                    <Fade left cascade duration={1500}>
                        <div className="col-lg-5 col-md-5 image">
                            <img height="auto" width="300" src={wiz} alt="profile pic" />
                        </div>
                    </Fade>
                    <Fade bottom cascade duration={1500}>
                        <div className="col-lg-7 col-md-7 text">

                            <p>This is where you can describe about yourself.The more you describe about yourself, the more chances you can! </p>
                            <p>This is where you can describe about yourself.The more you describe about yourself, the more chances you can! </p>
                            <p>Extra Information about you!like hobbies and your goals.</p>

                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;
