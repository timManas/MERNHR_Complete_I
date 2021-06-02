import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisterReducer } from '../reducers/userReducers'
import { registerUser } from '../actions/userActions'
import { Form, Button } from 'react-bootstrap'

const RegisterScreen = ({ match, location, history }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userRegisterInfo = useSelector((state) => state.userRegister)
  console.log(JSON.stringify(userRegisterInfo))
  const { userInfo } = userRegisterInfo

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [dispatch, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(
      'Name: ' + name + '   Email: ' + email + '     Password: ' + password
    )
    dispatch(registerUser(name, email, password))
  }

  return (
    <>
      <h1>RegisterScreen</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

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
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default RegisterScreen
