//Calcular tiempo de demora de un proceso de compra
const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó " + ((final-inicio)/60) + "minutos")