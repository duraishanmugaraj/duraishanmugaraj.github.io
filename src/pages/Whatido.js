import React from 'react';
import Logo from './Logo';
import { whatido, whtido_illustration } from '../portfolio';
import Fade from 'react-reveal/Fade';
import "./Whatido.css"

const Whatido = () => {

    return <section id="whatido">
        <h1 className="Whatido-title"><Fade bottom cascade>What I Do ? </Fade></h1>
        <div class="fluid-container">
            <div className="row">
                <div className="col-lg-5">
                    <img alt="illustration" className="img-fluid" src={whtido_illustration} />
                </div>
                <Fade bottom cascade>
                    <div className="col-lg-7 center">
                        <h2 className="fullstack"> Full Stack Development</h2>
                        <div className="fluid-container logo">
                            <div class="row">
                                {whatido.map((logo) => <Logo key={logo.id} name={logo.name} style={logo.style} />)}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </section>
}

export default Whatido
