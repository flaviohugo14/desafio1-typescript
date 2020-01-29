import { Request, Response } from 'express'

import Project from '../models/Project'

class ProjectController {
  public async index (req: Request, res: Response): Promise<Response> {
    const projects = await Project.find()

    return res.json(projects)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const project = await Project.create(req.body)

    return res.json(project)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { title } = req.body

    const project = await Project.updateOne({ id }, {
      title
    })

    return res.json(project)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await Project.deleteOne({ id })

    return res.send()
  }

  public async addTask (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { title } = req.body

    const project = await Project.findOne({ id })
    project.tasks.push(title)
    await Project.updateOne({ id }, project)

    return res.json(project)
  }
}

export default new ProjectController()
