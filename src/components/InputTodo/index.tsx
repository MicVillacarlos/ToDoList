import React, { useState } from 'react'
import { Container } from './style'
import { Input } from 'antd' 
import axios from 'axios'; 

export const CreateTodo = () => {
const [value,setValue] = useState<any[]>([])

const addTask = () => {
  const task = {
    value: value
  }

  axios.post('http://localhost:4000/tasks/add',task)
  .then(res=> console.log(res)); 
  setValue([])
}
const onChangeHandler = (e:any) => {
  setValue(e.target.value)
}
  return (
      <Container>
          <Input 
              style={{width:'280px',height:'2em', border: "#d1c8c8" }} 
              placeholder="Type task here"
              value={value} onChange={onChangeHandler}
              /> 
          <button onClick={addTask} >
              Add Task
          </button>

      </Container>
  )
  }
