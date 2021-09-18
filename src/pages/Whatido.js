import React from 'react';
import "./Whatido.css"
import WhatidoAnimi from '../components/Animation/WhatidoAnimi';
import Logo from './Logo';

const whatido = [{
    name: "HTML5",
    style: {
        content: 'url("https://api.iconify.design/icomoon-free/html-five.svg?color=%23e34f26&width=70&height=70")'
    }
},
{
    name: "CSS",
    style: {
        content: 'url("https://api.iconify.design/cib/css3.svg?color=%231572b6&width=70&height=70")'
    }
},
{
    name: "JavaScript",
    style: {
        content: 'url("https://api.iconify.design/grommet-icons/js.svg?width=70&height=70")'
    }
},
{
    name: "ReactJS",
    style: {
        content: 'url("https://api.iconify.design/logos/react.svg?color=%231572b6&width=70&height=70")'
    }
},
{
    name: "NodeJS",
    style: {
        content: 'url("https://api.iconify.design/logos/nodejs.svg?color=%231572b6&width=70&height=70")'
    }
},
{
    name: "MongoDB",
    style: {
        content: 'url("https://api.iconify.design/logos/mongodb.svg?color=%231572b6&width=70&height=70")'
    }
}, {
    name: "Java",
    style: {
        content: 'url("https://api.iconify.design/logos/java.svg?color=%231572b6&width=70&height=70")'
    }
},
{
    name: "Python",
    style: {
        content: 'url("https://api.iconify.design/logos/python.svg?color=%231572b6&width=70&height=70")'
    }
}]

const Whatido = () => {

    return <section className="">
        <h1 className="Whatido-title">What I Do ?</h1>


        <div class="fluid-container">
            <div className="row">
                <div className="col-lg-5">

                    <WhatidoAnimi />

                </div>
                <div className="col-lg-7 center">
                    <h2 className="fullstack"> Full Stack Development</h2>

                    <div className="fluid-container logo">
                        <div class="row">
                            {whatido.map((logo) => <Logo name={logo.name} style={logo.style} />)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}

export default Whatido
