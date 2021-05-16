import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../actions/productActions'
import Product from '../components/Product'
import { Row, Col, Image, Button } from 'react-bootstrap'

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
      <Row>
        <Col>
          <Image src={product.image} />
        </Col>
        <Col>
          <Row>
            <h2>{product.name}</h2>
          </Row>
          <Row>
            <h4>{product.description}</h4>
          </Row>
        </Col>
        <Col>
          <Row>
            <h4>${product.price}</h4>
          </Row>
          <Row>
            {product.countInStock > 0 ? <Button>Add to cart</Button> : <></>}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
