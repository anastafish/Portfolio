import '../styles/main.css';
import About from './about';
import Projects from './projects';
import Skills from './skills';

export default function Main(){     
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals[i].classList.remove("hide");
          } else {            
            reveals[i].classList.add("hide");
            reveals[i].classList.remove("active");

          }
        }
      }
      window.addEventListener("scroll", reveal);    

      return(
            <div className='main-content'>
                  <About/>  
                  <Projects/>  
                  <Skills/>  
            </div>        
    )
}