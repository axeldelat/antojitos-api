// En este archivo se encarga de levantar el todos los servicios
// el dotenv debe ser la primer linea a ejecutarse
require('dotenv').config()

// Cargar base de datos
const db = require('./src/lib/db')
const server = require('./src/server')

const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB Connected')
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(error => {
    console.error('DB ERROR: ', error)
  })
