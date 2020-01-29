import { Request, Response, NextFunction } from 'express'
import Project from '../models/Project'

export default async function projectExisted (req: Request, res: Response, next: NextFunction): Promise<Response> {
  const { id } = req.params

  const project = await Project.findOne({ id })

  if (!project) {
    return res.status(400).json({ error: 'Invalid ID' })
  } else {
    next()
  }
}
