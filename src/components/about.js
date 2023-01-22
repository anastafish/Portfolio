import '../styles/about.css'

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
                            <img src="../../anas.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                 Aenean commodo ligula eget dolor. Aenean massa.
                                  Cum sociis natoque penatibus et magnis dis parturient montes,
                                   nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                     Donec pede justo, fringilla vel, aliquet nec, vulputate
                                     </p>
                        </div>
                    </div>
    )
}