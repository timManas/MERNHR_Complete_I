import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../actions/cartActions'

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
  }, [dispatch, productId])

  return (
    <>
      <h1>Cart</h1>
    </>
  )
}

export default CartScreen
