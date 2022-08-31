const paquetes = [
    {nombre: "El Padrino", id:1, precio: 56},
    {nombre: "Karate Kid", id:2, precio: 66},
    {nombre: "Tarantino", id:3, precio: 145},
    {nombre: "Kubrick", id:4, precio: 200},
    {nombre: "Anime", id:5, precio: 209},
    {nombre: "pixar", id:6, precio: 215},
    {nombre: "educacion", id:7, precio: 219}

]

// Desestructuración 

const mostrarInfoPaquete = (paquetes)=> {
    const buscar = prompt("paquete a buscar:")
    const resultado = paquetes.find (u=>u.nombre == buscar)
    
    const {nombre:n, precio:p} = resultado

    alert (`el precio de ${n} es ${p}`)
}

const desestructurar = ({nombre , precio})=> {
  console.log(nombre, precio)
}

const cifras = [4, 5, 6, 72, 56, 12, 9]

const guionesAntiguos = ["Volver al futuro", "Cine Paradiso", "La naranja mecánica", "American Beauty"]

const guionesNuevos = ["Superman", "Lina de Lima", "El robo del siglo", "Spencer"]

const guiones = [...guionesAntiguos, ...guionesNuevos]

const guionesObj = {
    ...guiones

}

console.log(guionesObj)