import express from 'express'
import UsersController from './controllers/UsersController'

const router = express.Router()

router.post('/user', UsersController.create)

router.get('/user', UsersController.findAll)

router.get('/user/:userId', UsersController.findOne)

router.put('/user/:userId', UsersController.update)

router.delete('/user/:userId', UsersController.destroy)

export { router }
