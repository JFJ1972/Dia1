
// ¿Cuál es la opción que sirve?

//const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')

const loco = document.querySelectorAll('.panel')

loco.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
loco.forEach(panel =>{
    panel.classList.remove('active');
})    
}
