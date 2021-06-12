import React from 'react'
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { userLoginReducer } from '../reducers/userReducers'
import { logoutUser } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const onClickHandler = () => {
    if (userInfo) {
      dispatch(logoutUser())
    }
  }

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>

            {userInfo == null ? (
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            ) : (
              <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
                <LinkContainer to='profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={onClickHandler}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
