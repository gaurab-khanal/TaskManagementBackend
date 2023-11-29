const express = require('express');
const {getAllTask, addTask, getTaskById, deleteById, getTaskByStatus, updateTaskById} = require("../controllers/taskControllers.js");
const router = express.Router();


router.post("/add", addTask); // create task
router.get("/allTask", getAllTask); // read/ get all task
router.get("/singleTask/:id", getTaskById); // get Task by Id
router.get("/category/:status", getTaskByStatus); // get task by status
router.put("/updateTask/:id", updateTaskById); // update task by Id

router.delete("/deleteTask/:id", deleteById); // delete task by Id

module.exports = router;