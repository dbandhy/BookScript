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


const preloader = () => {
    `
    return "<div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

  <div class="preloader-wrapper active">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

  <div class="preloader-wrapper small active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
 }


if(paquetes.some(paquete => {
    return paquete.precio > 100
})) {
    console.log("Encontré precios bajos")
}

const nombres = paquetes.map((el) => el.nombre)
console.log(nombres)

const descuentoPaquete = paquetes.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio - 10
    }
})

console.log(descuentoPaquete)

directores = ["Quentin Tarantino", "Claudia Llosa", "Martin Scorsese", "Lucrecia Martel"]
peliculas = ["Pulp Fiction", "Aloft", "Tinta roja", "Goodfellas", "Zama"]

directores.push("Juan Campanella")

console.log(directores)


class Product {

    constructor( libro, precio, enStock) {

        this.libro = libro;
        this.precio = precio;
        this.enStock = enStock;

    }

    pedir() {
        alert("Hola, qué libro desea ordenar");
    }
    //Descuento de diez soles por el regreso a clases presenciales
    RestarPrecioClases() {
        return this.precio - 10
    }

    getPrecio() {
        return this.precio
    }

}

const product1 = new Product("El sueño del celta", 89, "disponible")

console.log(product1);


console.log(product1.getPrecio());
console.log(product1.RestarPrecioClases());

