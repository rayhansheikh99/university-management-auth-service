import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (res: Response, req: Request) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'Create User Successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create User',
    })
  }
}

export default {
  createUser,
}
