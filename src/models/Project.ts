import { Schema, model, Document } from 'mongoose'

interface ProjectInterface extends Document {
  id?: string
  title?: string
  tasks?: Array<string>
}

const ProjectSchema = new Schema({
  id: String,
  title: String,
  tasks: [String]
})

export default model<ProjectInterface>('Project', ProjectSchema)
