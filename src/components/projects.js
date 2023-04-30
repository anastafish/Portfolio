import { projects } from './data';
import { motion } from 'framer-motion'; 
import '../styles/projects.css'

export default function Projects(props){

    function Project(props){
        return(
            <motion.div className='project-card' whileHover={{scale:1.2}}>
                <a className='project-card' href={props.link} rel='noreferrer' target={'_blank'}>
                    <img src={props.img} alt="" />
                    <h1>{props.title}</h1>
                    </a>
            </motion.div>
        )
    }

    const projectsElem = projects.map((proj, index) => {
        return(
            <Project img={proj.img} link={proj.link} title={proj.title} key={index}/>
        )
    })
    return(
        <div className="projects reveal">
        <h1>Projects</h1>
        <div className='project-container'>
           {projectsElem}
        </div>
       </div>
    )
}