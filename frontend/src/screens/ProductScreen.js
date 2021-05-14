import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../actions/productActions'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.singleProduct)

  console.log(
    'Product: ' + JSON.stringify(product) + '     Id: ' + match.params.id
  )

  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id))
  }, [dispatch])

  return (
    <>
      <h1>ProductScreen</h1>
    </>
  )
}

export default ProductScreen
