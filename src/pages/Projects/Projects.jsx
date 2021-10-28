import React from 'react'
import { ProjectData } from '../../data/ProjectsData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import "./Projects.scss"

const Projects = () => {

    const projectsList = ProjectData.map(project => {
        return <ProjectCard key={project.title} title={project.title} image={project.image} desc={project.desc} techStack={project.techStack}/>
    })

    return (
        <div className="projects-page">
           <h2 className="projects-page__headline">Projects</h2>

            <div className="projects-page-grid">
                {projectsList}
            </div>

            <p className="projects-page__cta">Liked any of my projects and want to know more about them?<br /> Feel free to <a href="mailto:spiridigliozzi.alessandro@gmail.com">drop me a message</a> or check out my CV.</p>
        </div>
    )
}

export default Projects
