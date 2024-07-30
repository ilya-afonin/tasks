import { Schema, model } from 'mongoose'
import { ITask } from '../interfaces/tasks'

const taskSchema = new Schema<ITask>({
    title: String,
    message: String,
    code: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
})

const TaskMessage = model<ITask>('TaskMessage', taskSchema)

export default TaskMessage
