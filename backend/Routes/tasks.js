const express = require('express')
const router = express.Router()

const {
    getTasks,
    createTask,
    deleteTask,
    updateTask
}  = require('../Controllers/tasks')

router.get('/tasks',getTasks)
router.post('/tasks/add',createTask)
router.put('/tasks/update',updateTask)
router.delete('/tasks/:id',deleteTask)

module.exports = router;