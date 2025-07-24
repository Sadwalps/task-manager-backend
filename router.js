const express = require('express')
const { addTaskcontroller, getallTaskcontroller, removeTaskcontroller } = require('./controller/taskController')


const router = new express.Router()
//add Task
router.post('/add', addTaskcontroller )

//get Task
router.get('/alltask', getallTaskcontroller)

//delete task
router.delete('/removetask/:id', removeTaskcontroller)

module.exports = router