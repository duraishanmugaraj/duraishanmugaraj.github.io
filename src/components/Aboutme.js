import React from 'react';
import Fade from 'react-reveal/Fade';

import Slide from 'react-reveal/Slide';

import "./Aboutme.css"
import "./Main.css"

function Aboutme() {
    return (
        <section className="coloured">
            <Fade top>
                <h1>
                    About ME
                </h1>
            </Fade>

            <div class="fluid-container">
                <div class="row">
                    <div class="col-lg-5 col-md-5 image">
                        <Slide left>

                            <img height="auto" width="300" src="https://images.unsplash.com/photo-1580309237429-661ea7cd1d53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="profile pic" />
                        </Slide>
                    </div>
                    <div class="col-lg-7 col-md-7 text">
                        <Fade>

                            <p>This is where you can describe about yourself. The more you describe about yourself, the more chances you can! </p>

                            <p>  Extra Information about you! like hobbies and your goals.</p>
                            <p>This is where you can describe about yourself. The more you describe about yourself, the more chances you can! </p>

                            <p>  Extra Information about you! like hobbies and your goals.</p>
                            <div id="hide">
                                <a href="#" className="btn btn-lg "><span>Resume</span></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;
