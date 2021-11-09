import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = ({title, image}) => {

    return (
        <div className="project-card">
            <h2 className="project-card__title">{title}</h2>
        </div>
    )
}

export default ProjectCard
