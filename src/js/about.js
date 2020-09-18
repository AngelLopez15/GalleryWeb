const prev = document.getElementById('prev')
const next = document.getElementById('next')
const images = Array.from(document.querySelectorAll('.about__img'))
const texts = Array.from(document.querySelectorAll('.about__text'))

let cont = 0

// metodo largo
// if (prev) {
//   prev.addEventListener('click', () =>{

//     images.map(image => image.classList.remove('show'))
//     texts.map(text => text.classList.remove('show'))
//     if (cont==0) {
//       cont = images.length-1
//     }else{
//       cont--
//     }
//     images[cont].classList.add('show')
//     texts[cont].classList.add('show')

//   })
// }

// if (next) {
//   next.addEventListener('click', () =>{

//     images.map(image => image.classList.remove('show'))
//     texts.map(text => text.classList.remove('show'))
//     if (cont==images.length-1) {
//       cont = 0
//     }else{
//       cont++
//     }
//     images[cont].classList.add('show')
//     texts[cont].classList.add('show')

//   })
// }

// Metodo refactorizado
const setClass = (direction) => {

  images.map(image => image.classList.remove('show'))
  texts.map(text => text.classList.remove('show'))
  setCont(direction)
  images[cont].classList.add('show')
  texts[cont].classList.add('show')

}


const setCont = (direction) => {
  
  if (direction=='next') {

    if (cont==images.length-1) {
      cont = 0
    }else{
      cont++
    }
  } else {
    if (cont==0) {
      cont = images.length-1
    }else{
      cont--
    }
  }

}

// if (next) {
//   next.addEventListener('click', () => setClass('next'))
// }

// if (prev) {
//   prev.addEventListener('click', () => setClass('prev'))
// }

next && next.addEventListener('click', () => setClass('next'))
prev && prev.addEventListener('click', () => setClass('prev'))
