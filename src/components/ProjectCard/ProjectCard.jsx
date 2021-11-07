import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = ({title, image}) => {

    return (
        <div className="project-card">
            <h2 className="project-card__title">{title}</h2>
            <div className="project-card__img-container">
                <img src={image} alt={title} className="project-card__img"/>
            </div>
        </div>
    )
}

export default ProjectCard
