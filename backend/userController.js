import express from 'express'
import User from './userModel.js'

export const authUser = async (req, res) => {
  const { email, password } = req.body
  console.log('Email: ' + email + '     Password: ' + password)

  // Check if user exists
  const currentUser = await User.findOne({ email })
  if (!currentUser) {
    res.json({ error: 'Not Found' })
    throw new Error()
  }
  console.log('User: ' + currentUser)

  // Check if password match
  if (currentUser.password == password) {
    console.log('Password match')
    res.json({
      id,
      name,
      email,
      isAdmin,
    })
  } else {
    res.json({ error: 'Password did not match' })
    throw new Error()
  }
}
