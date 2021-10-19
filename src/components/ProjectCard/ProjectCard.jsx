import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = (props) => {

    const {image, title} = props;

    return (
        <div className="project-card">
            <img className="project-card__img" src={image} alt={title} />
            <h3 className="project-card__title">{title}</h3>
        </div>
    )
}

export default ProjectCard
