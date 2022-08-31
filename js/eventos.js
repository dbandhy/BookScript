//evento resaltar fondo

function miFondo(x) {
    x.style.background = "yellow";
}


// saludar y despedir página

var name = ""
function Hola() {
    nombre = prompt('Introduzca su nombre:','')
    alert('¡Hola ' + nombre + '!')
}

function Adios() {
    alert('¡Adios ' + nombre + '!')
}
//onLoad="Hola()" onUnload="Adios()">


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')





// Primera opción
btn1.addEventListener('click', () => {
    console.log('Hiciste click - Opcion1')
})

// Segunda opción
btn2.onclick = () => {
    console.log('Hiciste click - Opcion2')
}

const form = document.getElementById('form')
const inputName = document.getElementById('input-name')
const checkBox = document.getElementById('check-box')

let gustaLibro = false


form.onsubmit = (event) => {
    event.preventDefault()

    let message
    let name = inputName.value

    // console.log(checkBox.checked)

    if (checkBox.checked) {
        message = `A ${name} le gusta el libro`
    } else {
        message = `A ${name} NO le gusta el libro`
    }
    alert(message)
}

//Evento para index

function muestraMensaje() {
    console.log('Gracias por enviar tu información');
  }


// Eventos del mouse
btn3.onmouseleave = () => {
    console.log('No te vayas')
    btn3.className = 'btn-rojo'

}

btn3.onmouseover = () => {
    console.log('Volviste')
    btn3.className = 'btn-azul'
}

inputName.onkeydown = (event) => {
    console.log(event.key)
    console.log(' Presionaste una tecla')
}

inputName.onkeyup = () => {
    console.log('Levantaste el dedo')
}

inputName.onfocus = () => {
    inputName.placeholder = ''
    console.log('On focus!')
}

inputName.onblur = () => {
    if (inputName.value.length < 4) {
        console.log('El título debe tener cuatro caracteres como mínimo')
    }
}