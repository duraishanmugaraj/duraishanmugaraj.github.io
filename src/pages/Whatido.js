import React from 'react';
import { whatido } from '../portfolio';
import Fade from 'react-reveal/Fade';
import "./Whatido.css"
import Logo from './Logo';

const Whatido = () => {
    return <section id="whatido">
        <h1 className="Whatido-title"><Fade bottom cascade>What I Do ? </Fade></h1>
        <div class="fluid-container">
            <div className="row">
                <div className="col-lg-5">
                    <Fade bottom cascade>
                        <div className="box">
                            {whatido.details.map((detail) => <p>⚡ {detail}</p>)}
                        </div>
                    </Fade>
                </div>
                <Fade bottom cascade>
                    <div className="col-lg-7 center">
                        <h2 className="fullstack">{whatido.title}</h2>
                        <div className="fluid-container logo">
                            <div class="row">

                                {whatido.logos.map((logo) => <Logo key={logo.id} name={logo.name} className={logo.iconifyClassName} />)}

                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </section>
}

export default Whatido
