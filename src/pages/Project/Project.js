import React from 'react';
import Fade from 'react-reveal/Fade';
import "./Project.css"
import Tilt from 'react-tilt'

const Project = (props) => {
    return <div className="fluid-container">

        <h5 className="prj-title">
            <Fade bottom cascade>{props.title}</Fade>
        </h5>

        <div className="row">
            <div className="col-lg-6 project-t ">
                <Fade bottom cascade>
                    <div>
                        <p className="p">{props.desc}</p>
                        <button ><span> <a id="a" target="_blank" href={props.github}>Source Code </a></span></button>
                    </div>
                </Fade>
            </div>

            <div className="col-lg-6 img order-first order-lg-last">
                <a target="_blank" href={props.link}>
                    <Tilt className="Tilt" options={{ max: 55 }} >
                        <img src={props.img} className="img-fluid" alt={props.title} />
                    </Tilt>
                </a>
            </div>
        </div>
    </div >
}

export default Project