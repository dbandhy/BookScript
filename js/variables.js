const nombre = document.querySelector("#nombre")
const mail = document.querySelector("#mail")
const texto = document.querySelector("#texto")
const btnGuardar = document.querySelector("#guardar")
const mySwalClick =document.querySelector("#mySwal")

const animacion = document.querySelector("#animacion")


const btn = document.querySelector("#myBtn")
btn.addEventListener("click", () => {
    swal.fire({
        title: "Gracias por acercarte a la librería",
        text: "recibimos tu mensaje",
        icon: "error",
        confirmButtonText:"Disfruta tu lectura"})
})

const imagenCompra =document.querySelector("#compra")
imagenCompra.addEventListener(click, () => {
    swal.fire({
        title: 'BOOKSCRIPT',
        text: 'GRACIAS POR TU COMPRA',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',})
})


