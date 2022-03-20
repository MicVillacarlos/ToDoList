import React,{ useEffect, useState} from 'react';
import { Container,ListContainer } from './style';
import axios from 'axios';
import EditTodo from '../EditTodo';
import { Task } from '../types/type';

export const List = () => {
const [tasks, setTasks] = useState<Task[]>([])
const [isEdit, setIsEdit] = useState(false)
const [value,setValue] =useState('')
const [taskToEdit,setTaskToEdit] = useState({_id:'',value:''})

const fetchData = () =>{
    axios.get('http://localhost:4000/tasks')
        .then(res=>{
            setTasks(res.data.data)
        }).catch(err=>{
            console.log(err, "error useEffect")
        })
}

    useEffect(()=>{
       fetchData()
    },[])

const deleteTask = (_id:string) =>{
    axios.delete(`http://localhost:4000/tasks/${_id}`)
    .then(res=>{ console.log(res.data.data.value)})
    setTasks(tasks.filter( task => task._id !== _id ))
} 

const onChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setValue(e.target.value)
} 

const editTask = (task:any) =>{
    setTaskToEdit(task)
    setIsEdit(true)
}

const submitEditTask = () =>{
    axios.put(`http://localhost:4000/tasks/update/${taskToEdit._id}`,{value:value})
    .then(res=>{console.log(res) 
    
    fetchData()}) 
    setIsEdit(false)
    setValue('')
}


  return (
    <Container>
         {isEdit ? <EditTodo value={value} onChange={(onChangeHandler)} onClick={submitEditTask}/> : null}
        <ListContainer>
        <ul>
            {tasks.map((task:any)=>{
                return(
                    <li key={task._id}>
                        <button onClick={()=>deleteTask(task._id)}>
                            🗑
                        </button>
                        <button onClick={()=>editTask(task)}>
                            ✏️ 
                        </button>
                        <br/>
                        ~ {task.value}
                    </li>
                )
            })}
        </ul> 
        </ListContainer>
    </Container>

  )
}
