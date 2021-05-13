import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.listProducts)

  const { products } = productList
  console.log('ProductList: ' + JSON.stringify(products))

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Current Products</h1>
      {/* {products
        ? products.map((product) => (
            // console.log('Product: ' + JSON.stringify(product))
            <Product key={product._id} product={product} />
          ))
        : console.log('Nothing yet')} */}

      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
