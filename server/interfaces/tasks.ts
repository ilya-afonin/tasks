export interface ITask {
    _id: string
    title: string
    message: string
    code: string
    creator: string
    tags: string[]
    selectedFile: string
    likeCount: number
    createAt: Date
}
