import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../actions/productActions'
import { Row, Col, Image, Button } from 'react-bootstrap'

const ProductScreen = ({ location, history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.singleProduct)

  console.log(
    'Product: ' + JSON.stringify(product) + '     Id: ' + match.params.id
  )

  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id))
  }, [dispatch])

  const submitHandler = () => {
    // Thinking Solution ... interesting ... we are not using dispatch
    // dispatch(addProductToCart(product.id, qty))

    // Actual Solution
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

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
            {product.countInStock > 0 ? (
              <Button
                onClick={submitHandler}
                className='btn-block'
                type='button'
              >
                Add to cart
              </Button>
            ) : (
              <></>
            )}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
