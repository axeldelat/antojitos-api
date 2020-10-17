// Este Archivo define la función para conectarnos a la bd
const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// protocolo://user:password@host/dbname
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  // regresa la promesa de conn
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}

module.exports = {
  connect
}
