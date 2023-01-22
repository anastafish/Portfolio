import '../styles/footer.css'

export default function Footer(props){
    return(
        <div className="footer-container">
                        <p> Copyright © {new Date().getFullYear()} AnasTafish</p>
            <a href="https://github.com/anastafish" target={'_blank'} rel='noreferrer'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github'/></a>
                <a href="https://www.linkedin.com/in/anas-tafish-665027180/" target={'_blank'} rel='noreferrer'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='LinkedIn'/></a>
        </div>
    )
}