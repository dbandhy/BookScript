/*
const cargoGrillaContactos = (arr)=> {
      //debugger
      let detalleTabla = ""
      if (arr.length > 0) {
         arr.forEach(contacto => {
             detalleTabla += `<tr>
                                 <td>${contacto.id}</td>
                                 <td>${contacto.nombre}</td>
                                 <td>${contacto.telefono}</td>
                                 <td>${contacto.email}</td>
                              </tr>`
          })
          tbody.innerHTML = detalleTabla
        }
}

document.addEventListener("DOMContentLoaded", cargoGrillaContactos(arrayContactos))
*/

//me llevo el set de datos almacenados en la constante JSON, a un archivo .json independiente
//Tendré que agregarle las comillas a cada propiedad, porque el archivo .json solo entiende strings
//Resuelto esto, ahora tendré que recurrir a fetch() para leer su contenido e integrarlo en JS
//los archivos .JSON no soportan código JS en su interior. Tenemos que poner una estructura íntegramente JSON
//no variables, no constantes, no condicionales, nada que tenga que ver con JS
//el archivo .JSON simulará un backend que no tenemos, y nos proveerá esa información que nuestra app web necesita

const obtenerDatos = ()=> {
      fetch(URL)
               .then(response => 
                  response.json()
               )
               .then(data => {
                  //console.table(data)
                  arrayContactos = data
                  cargoGrillaContactos() //activarlo primero, luego comentarlo x finally()
               })
               // .catch(error => {
               //    console.error("Se ha producido un error", error)
               //    arrayContactos = [{id: "Error al obtener datos", nombre: "", telefono: "", email: ""}]
               // }
               // )
               // .finally(error =>
               //    cargoGrillaContactos()
               // )
               //cargarContactos() //Si dejo acá, fuera de la promesa, es probable que me de error
}

const cargoGrillaContactos = ()=> {
      let detalleTabla = ""
      arrayContactos.forEach(contacto => {
            detalleTabla += `<tr>
                              <td>${contacto.id}</td>
                              <td>${contacto.nombre}</td>
                              <td>${contacto.telefono}</td>
                              <td>${contacto.email}</td>
                           </tr>`
      })
      tbody.innerHTML = detalleTabla
}

document.addEventListener("DOMContentLoaded", obtenerDatos)

// BONUS TRACK: MISMA VERSION, PERO ASINCRÓNICA
// const obtenerDatosAsync = async ()=> {
//       const respuesta = fetch(URL)
//       const arrayContactos = await respuesta.json()
//             cargoGrillaContactos()
// }
