import express from 'express'
import { getAllUser ,addUser} from './product.controller.js'
const router=express.Router()
const baseUrl='/'

router.get(baseUrl,getAllUser)

router.post(baseUrl,addUser)






export default router