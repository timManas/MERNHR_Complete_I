import express from 'express'
import User from './userModel.js'
import { authUser } from './userController.js'

const router = express.Router()
router.route('/login').post(authUser)

export default router
