import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { userLoginReducer } from '../reducers/userReducers'

const LoginScreen = ({ match, location, history }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  console.log(JSON.stringify(userLogin))
  const { userInfo } = userLogin

  useEffect(() => {
    console.log('Here')
    if (userInfo) {
      history.push('/')
    }
  }, [dispatch, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Email: ' + email + '     Password: ' + password)
    dispatch(loginUser(email, password))
  }

  return (
    <>
      <h1>LoginScreen</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default LoginScreen
