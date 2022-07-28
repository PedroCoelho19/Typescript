import { Request, Response } from 'express'
import { UserModel } from '../database/models/UserModel'

class UserController {
  async findAll (req: Request, res: Response) {
    try {
      const users = await UserModel.findAll()
      return users.length > 0
        ? res.status(200).json(users)
        : res.status(204).send()
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async findOne (req: Request, res: Response) {
    try {
      const { userId } = req.params
      const user = await UserModel.findOne({
        where: {
          id: userId
        }
      })
      return user ? res.status(200).send(user) : res.status(204).send()
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async create (req: Request, res: Response) {
    try {
      const { email, nome, idade } = req.body
      const user = await UserModel.create({
        email,
        nome,
        idade
      })
      return res.status(201).send(user)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async update (req: Request, res: Response) {
    try {
      const { userId } = req.params
      await UserModel.update(req.body, {
        where: { id: userId }
      })
      return res.status(204).send()
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async destroy (req: Request, res: Response) {
    try {
      const { userId } = req.params
      await UserModel.destroy({ where: { id: userId } })
      res.status(204).send('deletado com sucesso')
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}

export default new UserController()
