import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = (props) => {

    const {image, title} = props;

    return (
        <>
        <h2 className="prop-title">{title}</h2>

        {/* <div className="project-card">
                <div className="project-card__img-container">
                    <img src={image} className="project-card__img" alt={title} />
                </div>
                <h3 className="project-card__title">{title}</h3>
        </div> */}
        </>
    )
}

export default ProjectCard
