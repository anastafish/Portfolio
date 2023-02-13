import '../styles/skills.css'

export default function Skills(props){
    return(
        <div className="skills-container reveal">
        <h1>Skills</h1>
        <div className="skills-icons">
            <img title='javascript' className='img1' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JavaScript'/>
            <img title='reactjs' className='img2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React'/>
            <img title='css3' className='img3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='Css3'/>
            <img title="html5" className='img4' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html5'/>            
            <img title='tailwindcss' className='img5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss"/>
          
        </div>              
        </div>
    )
}