import React from 'react';
import Project from './Project/Project';
import "./Projects.css"

const Projects = () => {
    const details = [{
        title: "Automobile Delearship System",
        desc: "Automobile delearship System is a web application developed to provide digital retail services to automotive dealerships in order to facilitate zero-contact sales and services",
        img: "https://user-images.githubusercontent.com/68941801/132941402-3ec7e6f8-283e-4017-b148-f28b88a5f27e.png",
        github: "https://github.com/duraishanmugaraj/automobile-delearship-system",
        link: "https://wizcarz.herokuapp.com/"
    },
    {
        title: "MovieDB-ReactJS",
        desc: "MovieDB-ReactJS is a movie database and search engine made with ReactJS and powered by OMDB API",
        img: "https://user-images.githubusercontent.com/68941801/132940516-4f0e50ac-1b39-40c4-b46d-843190137a6e.png",
        link: "https://duraishanmugaraj.github.io/moviedb-react/",
        github: "https://github.com/duraishanmugaraj/moviedb-react"
    }
    ]


    return <section className="projects">
        <h1 className="project-title">Projects</h1>
        {details.map((prj) =>
            <Project title={prj.title} desc={prj.desc} img={prj.img} link={prj.link} github={prj.github} />
        )}
    </section>
}

export default Projects