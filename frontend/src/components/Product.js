import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Product = ({ product }) => {
  return (
    // <LinkContainer to={`/product/${product._id}`}>
    //   <Card>
    //     <Card.Img variant='top' src={product.image} />
    //     <Card.Body>
    //       <Card.Title>{product.name}</Card.Title>
    //       <Card.Text>{product.price}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // </LinkContainer>

    <Card>
      <LinkContainer to={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image} />
      </LinkContainer>
      <LinkContainer to={`/product/${product._id}`}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </LinkContainer>
    </Card>
  )
}

export default Product
