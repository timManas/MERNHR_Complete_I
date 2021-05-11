import express from 'express'
import Product from './productModel.js'

const router = express.Router()
router.route('/').get(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

export default router
