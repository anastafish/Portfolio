import { projects } from './data';
import '../styles/projects.css'

export default function Projects(props){

    function Project(props){
        return(
            <div className='project-card'>
                <a href={props.link} rel='noreferrer' target={'_blank'}><img src={`../../${props.img}`} alt="" /></a>
                <h1>{props.title}</h1>
            </div>
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