import { Router } from 'express'
import HomePage from '../controller/homepage'

const router = Router()

router.get('/', HomePage)

export default router
