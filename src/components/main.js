import '../styles/main.css';
import { projects } from './projects';

export default function Main(){     
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);
      
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
            <div className='main-content'>
                  <div className="about">
                  <main class="container">
                        <p>Hello <div className='emoji'>👋</div> I'm</p>
                        <section class="animation">
                            <div class="first"><div>Anas Tafish</div></div>
                            <div class="second"><div>Web Developer</div></div>
                            <div class="third"><div>Front End Designer</div></div>
                        </section>
                        </main>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>  
                <div className="projects reveal">
                 <h1>Projects</h1>
                 <div className='project-container'>
                    {projectsElem}
                 </div>
                </div>
                <div className="skills-container reveal">
                <h1>Skills</h1>
                <div className="skills-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JavaScript'/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React'/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='Css3'/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html5'/>
                </div>              
                </div>
            </div>        
    )
}