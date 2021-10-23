import React from 'react'
import { useParams } from 'react-router'
import Button from '../../components/Button/Button'
import "./ProjectDetails.scss"
import data, { ProjectData } from '../../data/ProjectsData'
import { Link } from 'react-router-dom'

const ProjectDetails = (props) => {

    const { projectID } = useParams()

    const myProjects = ProjectData.filter(project => {
        return project.id == projectID;
    })

    const singleProject = myProjects[0]

    return (
        <div className="project-details">

            <div className="project-details__img">
                <img src={singleProject.image} alt="" />
            </div>

            <h2>{singleProject.title}</h2>

            <div className="project-details__links">
                <a href={singleProject.demo} target="_blank" className="project-details__link">Live Demo <i className="fas fa-external-link-alt"></i></a>
                <a href={singleProject.github} target="_blank" className="project-details__link">Source Code <i className="fas fa-code"></i></a>
            </div>

            <div className="project-details__techStack">
                <h3>Tech Stack Used:</h3>
                <ul className="project-details__techStack--list">
                    {singleProject.techStack.map(tech => {
                        return <li className="project-details__techStack--item">{tech}</li>
                    })}
                </ul>
            </div>

            <div className="project-details__description">
                <h3>The Project:</h3>
                <p>{singleProject.desc}</p>
            </div>

            
        </div>
    )
}

export default ProjectDetails
