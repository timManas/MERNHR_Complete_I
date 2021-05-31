import express from 'express'
import User from './userModel.js'
import { authUser, registerUser } from './userController.js'

const router = express.Router()
router.route('/login').post(authUser)
router.route('/').post(registerUser)

export default router
