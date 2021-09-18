import React from 'react';
import Fade from 'react-reveal/Fade';
import wiz from "../components/Animation/wiz-min.jpg"
import "./Aboutme.css"

function Aboutme() {
    return (
        <section className="aboutme">
            <Fade cascade duration={3000}>

                <h1 className="title">
                    About ME
                </h1>
            </Fade>

            <div class="fluid-container">
                <div class="row">
                    <div class="col-lg-5 col-md-5 image">
                        <Fade left duration={3000}>

                            <img height="auto" width="300" src={wiz} alt="profile pic" />
                        </Fade>

                    </div>
                    <div class="col-lg-7 col-md-7 text">
                        <Fade left cascade>

                            <p>This is where you can describe about yourself. The more you describe about yourself, the more chances you can! </p>
                            <p>This is where you can describe about yourself. The more you describe about yourself, the more chances you can! </p>

                            <p>Extra Information about you! like hobbies and your goals.</p>

                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;
