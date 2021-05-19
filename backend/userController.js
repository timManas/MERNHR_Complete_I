import User from './userModel.js'
import generateToken from './generateToken.js'

export const authUser = async (req, res) => {
  const { email, password } = req.body

  // Check if user exists
  const currentUser = await User.findOne({ email })
  if (!currentUser) {
    res.json({ error: 'Not Found' })
    throw new Error()
  }

  // Check if password match
  if (await currentUser.checkPassword(password)) {
    console.log('Password match')
    res.json({
      _id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      isAdmin: currentUser.isAdmin,
      token: generateToken(currentUser._id),
    })
  } else {
    res.status(401).json({ error: 'Password did not match' })
    throw new Error()
  }
}
