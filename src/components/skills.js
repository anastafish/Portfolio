import '../styles/skills.css'

export default function Skills(props){
    return(
        <div className="skills-container reveal">
        <h1>Skills</h1>
        <div className="skills-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JavaScript'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='Css3'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html5'/>
        </div>              
        </div>
    )
}