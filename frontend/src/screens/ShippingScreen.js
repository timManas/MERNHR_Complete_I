import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'

const ShippingScreen = ({ location, history, match }) => {
  return (
    <>
      <h1>Shipping</h1>
      <Form>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Enter Address" />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter City" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control  placeholder="Enter Postal Code" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control  placeholder="Enter Country" />
        </Form.Group>
 
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </>
  )
}

export default ShippingScreen
