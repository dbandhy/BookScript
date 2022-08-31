//Función para calcular descuentos según rango de edad
function cuponAudiovisual(){
    
    let i = prompt("¿Tienes ID del sector audiovisual?");

    if (i = "si", "Sí", "SI", "SÍ") {
        alert("Dispones de un obsequio de la sociedad de productores audiovisuales. Usa tu ID al momento de comprar")
    }

    else if (i = "no", "NO"){
        alert("No dispones de un obsequio de la sociedad de productores audiovisuales")
    }

    else (i ="")
        alert("Su respuesta no es válida")
    
}




function descuentoEstudiantil() {


    let i = Number(prompt("Ingresar edad"));
    
        if ((i <= 10)) {
            alert("Ud. asiste a primaria. Tiene un 50% de descuento en guiones seleccionados");
        
        }
        
    
        else if (i >= 11 && i<=18) {
             alert("Ud. asiste a secundaria. Tiene un 40% de descuento en guiones seleccionados");
        }
    
        else if (i >= 19 && i<=25) {
                alert("Ud. asiste a la universidad. Tiene un 25% de descuento en guiones seleccionados");
        }
    
        else {   
                alert("No ingresaste un número válido")
        }
            
            
    }
     
    
    function mostrarDia() {
        var fecha = new Date();
        alert("Hoy es día " + fecha.getDate());
    }


function igv(valorProducto, igv) {

    let aux = igv/100

    let resultado = valorProducto * aux;

    return parseInt(resultado);
    
    
}


// Función que descuenta precios por el retorno a clases 

const descuentoRetorno = [45, 82, 60.5, 49, 24, 26.5, 29];

const aplicadoDescuentoRetorno = descuentoRetorno.map(descuento => descuento - 11.5);

console.log(aplicadoDescuentoRetorno)



function cambio() {
    document.getElementById("reel").innerHTML = "Cambio";
  }


document.addEventListener ("click", function(){
    document.getElementById("demo").innerHTML = "Gracias por tu visita";
  });



  let url = document.URL;
  document.getElementById("website").innerHTML = url;