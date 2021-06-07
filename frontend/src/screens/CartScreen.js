import React, { useEffect } from 'react'
import { addProductToCart } from '../actions/cartActions'

const CartScreen = ({ location, history, match }) => {
  const dispatch = useEffect()

  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  useEffect(() => {
    if (productId) {
      dispatch(addProductToCart(product.id, qty))
    }
  }, [dispatch, productId])

  return (
    <>
      <h1>Cart</h1>
    </>
  )
}

export default CartScreen
