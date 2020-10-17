const express = require('express')

const tacos = require('../usecases/tacos')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allTacos = await tacos.getAll()
    res.json({
      success: true,
      message: 'All Tacos',
      data: {
        tacos: allTacos
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const foundTaco = await tacos.getById(id)
    res.json({
      success: true,
      message: 'Selected Taco',
      data: {
        tacos: foundTaco
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedTacos = await tacos.deleteById(id)
    res.json({
      success: true,
      message: 'Deleted Taco',
      data: {
        tacos: deletedTacos
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newDataTaco = req.body

    const tacoUpdated = await tacos.updateByID(id, newDataTaco)
    res.json({
      success: true,
      message: 'Updated Taco',
      data: {
        taco: tacoUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const {
      type,
      price,
      isChido
    } = req.body

    if (!type) throw new Error('Type is required')
    if (!price) throw new Error('Price is required')
    if (isChido == null) throw new Error('isChido is required')

    const newTaco = await tacos.create({ type, price, isChido })

    res.json({
      success: true,
      message: 'Taco Created',
      data: {
        taco: newTaco
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
