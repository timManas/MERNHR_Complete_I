import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

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
      <h1>HomeScreen1</h1>
    </>
  )
}

export default HomeScreen
