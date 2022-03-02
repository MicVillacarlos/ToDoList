const Task = require ('../Model/Task');

 const createTask = async (req,res)=>{
     const { value } =req.body;
     if(!value){
         return res
         .status(400)
         .json({success: false, msg:'Please put task'})
     }
     const newTask = new Task({
         value
     })
     try{
         const saveTask  = await newTask.save();
         res.status(200).json({success:true, saveTask})
     }catch(err){
         res.status(400).json({success:false, msg: "fail to add to task list"})
         console.log(err)
     }
 };

 const getTasks = async (req,res) => {
    try{
        const tasksDB = await Task.find()
        res.status(200).json({ success:true, data: tasksDB })
    } catch (err){
        res.status(500).json({ success:false, msg: "Fail To Read" })
    }
 }

 const updateTask = async (req,res) => {
    const { id } = req.params;
    const { value } = req.body;

    try{
        const updatedTask = await Task.updateOne({_id:id},{ $set:{ value }});
        res.status(201).json({ success: true, updatedTask})
    }catch(err){
        res.status(400).json({ success: false, msg: ' Fail to update Tasks' })
    }
 }

 const deleteTask = async (req,res) => {
    const { id } = req.params;
    try{
        const deletedTask = await Task.findOneAndDelete({_id:id})
        res.status(200).json({success: true, data: deletedTask})
    }catch (err){
        res.status(400).json({success: false , msg: ' Failed to delete task'})
        console.log(err)
    }
 }

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
}