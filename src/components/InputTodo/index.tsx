import React, { useState} from 'react';
import { Container } from './style';
import { Input} from 'antd';
import 'antd/dist/antd.css';
import { List } from '../List';
import axios from 'axios'; 

export const CreateTodo = () => {
const [value,setValue] = useState('')

const addTask = () => {
  const task = {
    value: value
  }
  window.location.reload();
  axios.post('http://localhost:4000/tasks/add',task)
  .then(res=> console.log(res)); 
  setValue('')
}
const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}
  return (
    <div>
      <Container>
          <Input 
              style={{width:'280px',height:'3em', border: "#d1c8c8" }} 
              placeholder="Type task here"
              value={value} onChange={onChangeHandler}
              /> 
          <button onClick={addTask} >
              Add Task
          </button>
      </Container>
      <List/>
      </div>  
  )
  }
