import '../styles/header.css'

export default function Header(){

    function handleScroll(className){
        const scrollDiv = document.querySelector(className).offsetTop - 100;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'}); 
    }

    return(
        <div className="header-container">            
             <div className='h1-container'>
                <h1 className='header-h1'>Welcome To My Portfolio!</h1>
            </div>  
            <div className='header-links'>
                <h1 onClick={() => handleScroll(".projects")}>
                    Projects
                    </h1>
                <h1 onClick={() => handleScroll(".skills-container")}>
                    Skilss
                    </h1>
                <h1 onClick={() => handleScroll(".contact-container")}>
                    Contact
                    </h1>
            </div>
        </div>
    )
}