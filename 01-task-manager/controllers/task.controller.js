const Task = require('../models/task.model')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            res.status(404).json({ msg: error })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        // console.log(typeof task)

        if (!task) {
            res.status(404).json({ msg: `No task with id : ${taskID}` });
        }

        // console.log(task);
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });

        if (!task) {
            res.status(404).json({ err: `No task with ${taskID}` });
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}