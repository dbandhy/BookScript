const guardarDatos = () => {
    
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("mail", mail.value)
    localStorage.setItem("texto", texto.value)
}


const recuperarDatos = () => {
    nombre.value = localStorage.getItem("nombre")
    mail.value = localStorage.getItem("mail")
    texto.value = localStorage.getItem("texto")
}

const limpiarLS = () => {
    const resp = confirm("¿Desea eliminar los contenidos?")
        if(resp) {
            localStorage.clear()
            console.log("Se eliminaron los datos")
        }
}


btnGuardar.addEventListener("click", ()=>guardarDatos())