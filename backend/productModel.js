import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
})

const productSchema = mongoose.Schema({
  rating: { type: Number, required: true },
  numReviews: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  review: [reviewSchema],
})

const Product = mongoose.model('Product', productSchema)

export default Product
