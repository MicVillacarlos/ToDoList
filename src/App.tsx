import React,{ useState} from 'react'
import { Navbar } from './components/Navbar'
import { data } from './data'
import { List } from './components/List'
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom'
import axios from 'axios'; 

const App = () => {
  const [taskValue,setTaskValue] = useState('')
  const [list,setList] = useState(data)

    const addTask =()=>{
      const task = {
        id: Math.floor(Math.random() * 100),
        value: taskValue
      }
      setList([...list,task])
      setTaskValue('')

      axios.post('http://localhost:4000/tasks/add',task)
      .then(res=> console.log(res.data) )
    }

    const deleteTask=(id:number)=>{
      setList(list.filter(task=>task.id!==id))
    }

    const onChangeHandler = (e:any) =>{
      setTaskValue(e.target.value)
    }

  return(
    <div>
      <Navbar onChangeHandler={onChangeHandler} addTask={addTask} value={taskValue}/>
    <Router>
      <Routes>
        <Route/>
        <List list={list} deleteTask={deleteTask}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App

