import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Product from '../components/Product'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.listProducts)

  const { products } = productList
  console.log('ProductList: ' + JSON.stringify(products))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <h1>Current Products</h1>
      {products
        ? products.map((product) => (
            // console.log('Product: ' + JSON.stringify(product))
            <Product key={product._id} product={product} />
          ))
        : console.log('Nothing yet')}
    </>
  )
}

export default HomeScreen
