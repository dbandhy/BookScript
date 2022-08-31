//Array con paquetes de libros sobre distintos cineastas o temas
const paquetes = [
    {nombre: "El Padrino", id:1, precio: 56},
    {nombre: "Karate Kid", id:2, precio: 66},
    {nombre: "Tarantino", id:3, precio: 145},
    {nombre: "Kubrick", id:4, precio: 200},
    {nombre: "Anime", id:5, precio: 209},
    {nombre: "pixar", id:6, precio: 215},
    {nombre: "educacion", id:7, precio: 219}

]

const paquetesEnStr =  JSON.stringify(paquetes)


//Enlazado al formulario de la página de contacto 

const guardoDatosJSON = () => {
    const datosForm = {nombre:"", mail:"", texto:"" }
    datosForm.nombre = nombre.value
    datosForm.mail = mail.value
    datosForm.texto = texto.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se almanecó la información correctamente")

}

btnGuardar.addEventListener("click", guardoDatosJSON())

const recuperoDatosJSON = () => {
    datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"))
    nombre.value = datosDelForm.value
    mail.value = datosDelForm.mail
    texto.value = datosDelForm.texto
}

recuperoDatosJSON()

//const guardoDatosJSON = () => {
//    const datosForm = {nombre:"", id:0, precio:0 }
//    datosForm.nombre = nombre.value
//    datosForm.id = id.value
//    datosForm.precio = precio.value
//    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
//    console.info("Se almanecó la información correctamente")

//}

//btnGuardar.addEventListener("click", guardoDatosJSON())