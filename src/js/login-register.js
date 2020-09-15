const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form') 
const registerForm = document.getElementById('register-form')

// Siempre hay que ver si un elemento existe antes de ponerle un evento
if (topbar) {
  // escuchando el evento de click
  topbar.addEventListener('click', (e)=>{
    // obteniendo el data-type (es type por que es el nombre que le pusimos pero va
    // el nombre que le hayamos puesto no a fuerzas es type)
    if (e.target.parentElement.dataset.type != undefined) {
      // Si es diferente de undefined quiere decir que si dio click en alguno de los iconos
      // entonces hay que verificar en cual fue para desplegar alguna ventana modal
      if (e.target.parentElement.dataset.type=='login') {
        // Le ponemos la clase para que se muestre la ventana
        loginModal.classList.add('lightbox--show')
      }else if(e.target.parentElement.dataset.type=='register'){
        registerModal.classList.add('lightbox--show')
      }
    }
  })

}

// una vez que ya tenemos el modal en pantalla debemos ver la forma de cerrarlo
if (loginModal) {
  // escuchamos el evento del click
  loginModal.addEventListener('click',(e)=>{
    // Si dan click en cualquier parte que no sea el formulario removera la clase
    if (e.target.classList.contains('lightbox')) {
      loginModal.classList.remove('lightbox--show')
    }
  })

}

if(registerModal){
  registerModal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('lightbox')){
      registerModal.classList.remove('lightbox--show')
    }
  })
}

// Para prevenir el evento por default de formulario y no se dispare al 
// mostarse en la pagina
if (loginForm) {
  loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    // pequeño truco para hacer el evento de transform en pantallas touch
    setTimeout(() => {
      // estamos obteniendo el botton del evento y le aplicamos blur
      // que es lo contrario a focus
      e.target.button.blur()
    }, 200);

    console.log('SEND')
  })
}

if (registerForm) {
  registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    setTimeout(() => {
      // estamos obteniendo el botton del evento y le aplicamos blur
      // que es lo contrario a focus
      e.target.button.blur()
    }, 200);
    console.log('SEND')
  })
}