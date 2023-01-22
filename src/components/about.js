import '../styles/about.css'
import anas from '../images/anas.png'

export default function About(props){
    return(
        <div className="about">
                  <main class="container">
                        <p>Hello <div className='emoji'>👋</div> I'm</p>
                        <section class="animation">
                            <div class="first"><div>Anas Tafish</div></div>
                            <div class="second"><div>Web Developer</div></div>
                            <div class="third"><div>Front End Designer</div></div>
                        </section>
                        </main>
                        <div className="info">
                            <img src={anas} alt="" />
                            <p>I am a passionate web developer. I believe in 
                                the power of collaboration and open communication. <br /> <br />
                                 I work hard to achieve my goals and improve the quality of my work.
                                  I am able to create engaging and effective applications that
                                   help people connect with the world around them.<br /> <br />
                                   Every day, I find new things to learn about. This keeps me motivated
                                    to improve my skills and knowledge. <br /> <br /> I am constantly looking
                                     for opportunities to expand my abilities.
                                     </p>
                        </div>
                    </div>
    )
}