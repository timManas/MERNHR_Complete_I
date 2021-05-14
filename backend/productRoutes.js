import express from 'express'
import Product from './productModel.js'

const router = express.Router()
router.route('/').get(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

router.route('/:id').get(async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

export default router
