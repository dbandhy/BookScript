
const express = require('express')
const app = express()

const arrayContactos = [{id: 1, nombre: "JASON BOURNE", telefono: "11-5388-7554", email: "jb@cia.us"},
                        {id: 2, nombre: "NICKY PARSONS", telefono: "11-8888-0990", email: "np@cia.us"},
                        {id: 3, nombre: "MARIE KREUTZ", telefono: "11-3444-1111", email: "mariekr@hotmail.fr"}]

const error404 = '<body>ERROR 404 ENLACE INCORRECTO</body>'

//EnLACES

app.use(
  express.static(__dirname + "/database.html")
)

app.get('/', function (req, res) {
  res.send('Bienvenido a la librería de guiones')
})

app.get('/basededatos', function (req, res) {
  res.send(arrayContactos)
})

app.get("*", function (req, res) {
  res.send(error404)
})

app.listen(3000, () => {
  console.log("Ejecutando Librería de guiones")
})