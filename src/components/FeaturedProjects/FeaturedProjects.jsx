import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { ProjectData } from '../../data/ProjectsData'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./FeaturedProjects.scss"

const FeaturedProjects = () => {

    const projectsList = ProjectData.slice(0, 4).map(project => {
        return (
            <Link to={`/project/${project.id}`} key={project.title}>
                <ProjectCard title={project.title} image={project.image}/>
            </Link>
        )
    })

    return (
        <section className="featured-projects">

            <p className="featured-projects__text">
                <em>Check out my projects </em> <i className="fas fa-chevron-down"></i> 
            </p>

            <div className="featured-projects-grid">
                {projectsList}
            </div>

            <Link to="/projects">
                <Button buttonText="See More Projects"/>
            </Link>
            
        </section>
    )
}

export default FeaturedProjects
