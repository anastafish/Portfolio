import '../styles/main.css'

export default function Main(){

    function Project(props){
        return(
            <div className='project-card'>
                <h1>{props.title}</h1>
                <img src={`../../${props.img}`} alt="" />
            </div>
        )
    }

    return(
            <div className='main-content'>
                <div className="projects">
                 <h1>My Projects</h1>
                 <div className='project-container'>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>
                    <Project title="Todo" img="todo.png"/>                    
                 </div>
                </div>
                <div className="about">
                    <h1>About Me</h1>
                    <div className='about-container'>
                        <h1>Hello Im Anas</h1>
                    </div>
                </div>
            </div>        
    )
}