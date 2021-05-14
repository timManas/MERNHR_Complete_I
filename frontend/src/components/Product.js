import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card>
      <Card.Img variant='top' src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
