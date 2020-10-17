// Definición del Servidor

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

app.use('/tacos', tacosRouter)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'antojitos APIv1'
  })
})

module.exports = app

/*
Cada que quiera crear un endpoint nuevo el proceso es:
1.-asegurarnos de tener nuestro modelo(acceso a datos), si no existe crearlo
2.- Crear el o los casos de uso necesarios para la acción
3.- crear nuestro endpoint y conectarlo al o los casos de uso correspondientes
*/
