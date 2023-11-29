const Task = require("../models/task");

//Create Task
exports.addTask = async (req,res, next)=>{
    try {
        const {title, status} = req.body;

        if(!title || !status){
            return res.status(400).json({
                 Error: "Title or status id missing!"
             });
         }

        let task = new Task(title, status);
    
        task = await task.save();
    
        res.status(200).json({
            message: "Task added successfully"
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Read Task- getAllTask
exports.getAllTask = async (req,res, next)=>{

    try{
        const [tasks, _] = await Task.findAll();

        res.status(200).json({count: tasks.length, tasks});
    }catch (error){
        console.log(error);
        next(error);
    }
}

// Read Task- get TaskByID
exports.getTaskById = async (req, res, next) =>{
    try {

        let taskId = req.params.id;

        let [task, _] = await Task.findById(taskId);

        res.status(200).json({
            task: task[0]
        })
    } catch (err){
        console.log(err);
        next(err);
    }
}

// Read Task- getTaskByStatus
exports.getTaskByStatus = async (req, res, next) =>{
    try {

        let taskStatus = req.params.status;

        let [task, _] = await Task.findByStatus(taskStatus);

        res.status(200).json({
            task
        })
    } catch (err){
        console.log(err);
        next(err);
    }
}

// Delete Task by ID
exports.deleteById = async (req, res, next) =>{
    try {

        let taskId = req.params.id;

        await Task.deleteById(taskId);

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error){
        console.log(error);
        next(error);
    }
}

//Update Task by ID
exports.updateTaskById = async (req, res, next) => {
    try {

        let taskId = req.params.id;

        const { title, status } = req.body;

        
        if(!title || !status){
           return res.status(400).json({
                Error: "Title or status id missing!"
            });
        }

        await Task.updateById(taskId, title, status);

        res.status(200).json({
            message: "Task updated successfully"
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};
