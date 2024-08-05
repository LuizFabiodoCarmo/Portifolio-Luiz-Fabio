const projectTrig = document.querySelectorAll(".acordeon .trig")

projectTrig.forEach((trig) => {
    trig.addEventListener('click',(e)=>{
        const project = trig.parentElement
        const isOpen = project.classList.contains('open')

        if (isOpen) {
            project.classList.remove('open')
         } else{
            project.classList.add('open')
        }
       
   }) 

})



