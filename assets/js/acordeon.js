// const projectTrig = document.querySelectorAll(".acordeon .trig")

// projectTrig.forEach((trig) => {
//     trig.addEventListener('click',(e)=>{
//         const project = trig.parentElement
//         const isOpen = project.classList.contains('open')

//         if (isOpen) {
//             project.classList.remove('open')
//          } else{
//             project.classList.add('open')
//         }
       
//    }) 

// })
   

const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})


