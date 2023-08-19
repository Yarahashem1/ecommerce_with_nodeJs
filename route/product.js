const express = require('express')
const router = express.Router()
const { getProducts, insertProduct, deleteProduct} = require('../logic/product')

router.get('/', getProducts)
router.post('/',insertProduct)
router.delete('/:id',deleteProduct)

module.exports = router