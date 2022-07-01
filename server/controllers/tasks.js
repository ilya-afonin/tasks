import TaskMessage from "../models/taskMessage.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await TaskMessage.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createTask = async (req, res) => {
    const task = req.body;
    console.log(req.body)
    const newTask = new TaskMessage(task);

    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
