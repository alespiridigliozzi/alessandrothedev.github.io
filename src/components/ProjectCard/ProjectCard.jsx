import React from 'react'
import "./ProjectCard.scss"
import imgJs from "../../assets/images/js-calculator.png"

const ProjectCard = (props) => {

    const {image, title} = props;

    return (
        <div className="project-card">
            <div className="project-card__img-container">
                <img src={image} className="project-card__img" alt={title} />
            </div>
            <h3 className="project-card__title">{title}</h3>
        </div>
    )
}

export default ProjectCard
