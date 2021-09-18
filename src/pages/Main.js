import React from 'react';
import Coder from "../components/Animation/Coder"
import Fade from 'react-reveal/Fade';

import "./Main.css"

function Main() {
    return (<section className="mainX">
        <div className="fluid-container">
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="mobile">
                        <Fade left cascade duration={2000}>
                            <h1 className="main-title n">
                                Hi, I'm <span id="name">Durai Shanmugaraj </span>
                            </h1>
                        </Fade>
                        <h1 className="main-title">A Web Developer </h1>
                        <Fade duration={2000}>
                            <a href="https://drive.google.com/file/d/1QBCMuJyjsOQxUqmnN3nGQrUnk3GP2-ER/view?usp=sharing" className="btn btn-lg hide"><span>RESUME</span></a>
                        </Fade>
                    </div>
                </div>
                <div className="col-lg-6 ani">
                    <Coder />
                </div>
            </div>
        </div >
    </section >
    );
}

export default Main;
