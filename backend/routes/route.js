import express from 'express'
import { CreateUser } from '../controller/user.js'

const router = express.Router();

//User router
router.post('/user/create-user', CreateUser)

export default router