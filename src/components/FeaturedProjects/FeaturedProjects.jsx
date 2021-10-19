import React from 'react'
import Button from '../Button/Button'
import { ProjectData } from '../../data/ProjectsData'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./FeaturedProjects.scss"

const FeaturedProjects = () => {

    const projectsList = ProjectData.map(project => {
        return <ProjectCard key={project.title} title={project.title} image={project.image}/>
    })

    return (
        <section className="featured-projects">

            <h2 className="featured-projects__headline">Featured Projects</h2>

            <div className="featured-projects-grid">
                {projectsList}
            </div>

            <Button buttonText="See More Projects"/>

        </section>
    )
}

export default FeaturedProjects
