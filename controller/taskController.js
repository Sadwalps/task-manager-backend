const tasks = require('../model/taskModel')

// To add task
exports.addTaskcontroller = async (req, res) => {
    console.log(`Inside add task controller`);

    const { title, description, completed, createdAt } = req.body
    console.log(title, description, completed, createdAt);

    try {
        const existingtask = await tasks.findOne({ title })
        if (existingtask) {
            res.status(406).json(`Task already Exists`)
        } else {
            const newtask = new tasks({ title, description, completed, createdAt })
            await newtask.save()
            res.status(200).json(newtask)
        }
    } catch (error) {
        res.status(401).json(`Task adding failed due to ${error}`)
    }
}

// To display task
exports.getallTaskcontroller = async (req, res) => {
    try {
        const alltask = await tasks.find()
        res.status(200).json(alltask)
    } catch (error) {
        res.staus(401).json(error)
    }
}

// To delete task
exports.removeTaskcontroller = async (req, res) => {
    console.log(`Inside remove task controller`);
    const { id } = req.params

    try {
        await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json(`Task deleted`)
    } catch (error) {
        res.status(401).json(error)
    }
}