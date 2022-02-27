
import React,{ useState } from 'react'
import { Navbar } from './components/Navbar'
import { data } from './data'
import { List } from './components/List'

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
    }

  const deleteTask=(id:number)=>{
    setList(list.filter(task=>task.id!==id))
  }

    const onChangeHandler = (e:any) =>{
      setTaskValue(e.target.value)
    }

  return(
    <div>
      <Navbar onChangeHandler={onChangeHandler} addTask={addTask} value={taskValue} />
      <List list={list} deleteTask={deleteTask}/>
    </div>
  )
}

export default App

