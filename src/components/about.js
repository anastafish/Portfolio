import '../styles/about.css'
import anas from '../images/anas.jpg'

export default function About(props){
    return(
        <div className="about">
                  <main class="container">
                        <p>Hello <div className='emoji'>👋</div> I'm</p>
                        <section class="animation">
                            <div class="first"><div>Anas Wail Tafish</div></div>
                            <div class="second"><div>Web Developer</div></div>
                            <div class="third"><div>Front End Designer</div></div>
                        </section>
                        </main>
                        <div className="info">
                            <img src={anas} alt="" />
                            <p>Computer Science student and Software Developer skilled in Full Stack Web Development. 
                                <br /> <br />
                                Builds user-friendly websites and apps using various coding languages, including React.js, 
                                JavaScript, Nodejs, and Python.
                                <br /> <br />
                                Interested in Machine Learning and AI.
                                <br /> <br />
                                excited to apply classroom 
                                knowledge to real-world projects.
                                     </p>
                        </div>
                    </div>
    )
}