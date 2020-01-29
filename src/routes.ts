import { Router } from 'express'

import projectExisted from './middlewares/ProjectExisted'
import ProjectController from './controllers/ProjectController'

const routes = Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', projectExisted, ProjectController.update)
routes.delete('/projects/:id', projectExisted, ProjectController.destroy)
routes.post('/projects/:id/tasks', projectExisted, ProjectController.addTask)

export default routes
