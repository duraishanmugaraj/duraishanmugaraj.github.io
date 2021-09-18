import React from 'react';
import Coder from "../components/Animation/Coder"
import Fade from 'react-reveal/Fade';
import "./Main.css"

function Main() {
    return (<section className="mainX">
        <div className="fluid-container">
            <div className="row">
                <div className="col-lg-6 ">

                    <div className="main">
                        <Fade left cascade duration={2000}>
                            <div className="mobile">
                                <span> Hi, I'm <span id="name">Durai Shanmugaraj </span><br />
                                    A Web Developer <br /></span>

                                <a href="https://drive.google.com/file/d/1QBCMuJyjsOQxUqmnN3nGQrUnk3GP2-ER/view?usp=sharing" className="btn btn-lg hide"><span>RESUME</span></a>
                            </div>
                        </Fade>

                    </div>

                </div>
                <div className="col-lg-6 ani">
                    <Coder />
                </div>
            </div>
        </div >
    </section>
    );
}

export default Main;
