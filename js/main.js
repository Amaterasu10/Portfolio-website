console.log("hello")
const show = () => {
    const projectContainer = document.querySelector('.project-container')
    const project = document.querySelector('iframe')

    projectContainer.classList.toggle('container-opened')

    if(project.classList == ('project-opened')){
        project.classList.toggle('project-opened')
    }
    else{
        setTimeout(()=>{
            project.classList.toggle('project-opened')        
        }, 500)
    }
    
    
}