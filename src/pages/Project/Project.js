import React from 'react';
import "./Project.css"
import Tilt from 'react-tilt'

const Project = (props) => {
    return <div className="fluid-container">
        <div className="row">
            <div className="col-lg-6 project-t">
                <h5>{props.title}</h5>
                <p className="p">{props.desc}</p>

                <button ><span> <a id="a" target="_blank" href={props.github}>Source Code </a></span></button>

            </div>
            <div className="col-lg-6 img">
                <a target="_blank" href={props.link}>
                    <Tilt className="Tilt" options={{ max: 10 }}  >

                        <img src={props.img} class="img-thumbnail" alt={props.title} />
                    </Tilt>
                </a>
            </div>
        </div>
    </div >
}

export default Project