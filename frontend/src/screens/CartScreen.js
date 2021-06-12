import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, removeProductFromCart } from '../actions/cartActions'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartScreen = ({ location, history, match }) => {
  const dispatch = useDispatch()

  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log('CartItems: ' + JSON.stringify(cartItems))

  useEffect(() => {
    if (productId) {
      dispatch(addProductToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const onClickHandler = () => {
    console.log('Clicked on Buttonx')
    dispatch(removeProductFromCart(productId))
  }

  return (
    <>
      <h1>Cart</h1>
      <Row>
        <Col>
          {cartItems.length === 0 ? (
            <h3>Cart is Empty</h3>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item>
                  <Col>
                    <Image src={item.image} />
                  </Col>
                  <Col>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col>{item.price}</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(
                          addProductToCart(item.product, Number(e.target.value))
                        )
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button
                      type='button'
                      onClick={() => onClickHandler(item.product)}
                    >
                      x
                    </Button>
                  </Col>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col>
          <Row>
            <h3>SubTotal Items</h3>
          </Row>
          <Row>
            {cartItems
              .reduce(
                (accumulator, item) => accumulator + item.qty * item.price,
                0
              )
              .toFixed(2)}
          </Row>
          <Row>
            <Button>Proceed to Checkout</Button>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen
