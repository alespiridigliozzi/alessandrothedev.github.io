import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = ({title, image}) => {

    return (
        <div className="project-card">
            <div className="project-card__img-container">
                <img className='project-card__img' src={image} alt="" />
            </div>
            <h2 className="project-card__title">{title}</h2>
        </div>
    )
}

export default ProjectCard
