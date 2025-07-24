//import mongoose
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String

    },
    description: {
        required: true,
        type: String
    },
    completed: {
        default: false,
        type: Boolean
    },
    createdAt: {
        default: Date.now,
        type: Date
    }
})

const tasks = mongoose.model("tasks", taskSchema)
module.exports = tasks