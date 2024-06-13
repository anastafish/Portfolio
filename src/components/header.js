import '../styles/header.css'

export default function Header(){

    function handleScroll(className, dimensions){
        const scrollDiv = document.querySelector(className).offsetTop - dimensions;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'}); 
    }

    return(
        <div className="header-container">            
             <div className='h1-container'>
                <h1 className='header-h1'>Welcome To My Portfolio!</h1>
            </div>  
        </div>
    )
}