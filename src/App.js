import React from 'react'
import './App.css';
import {MdDelete} from 'react-icons/md'
import {MdLabelImportant} from 'react-icons/md'
import {MdAddCircle} from 'react-icons/md'
import {GoAlert} from 'react-icons/go'

class App extends React.Component{
constructor(props){
  super(props);

  this.state={
    newTask:'',
    newTask2:'',
    newDetails:'',
    list:[],
    list2:[],
    error:''
  }
}

formValidation=()=>{
  let error='';
  if(this.state.newTask===''){
    error='error, please type something'
  }
  if (error){
    this.setState({error})
    return false
  }
  return true
}
//INITIAL LIST
addTask=()=>{
  if(this.formValidation()){
    const newTask={
      id:Math.floor(Math.random()*10000),
      value: this.state.newTask
    }
    const list = [...this.state.list];
    list.push(newTask)
    this.setState({list, newTask:'',error:''})
  }
}

deleteTask=(id)=>{
  const list = [...this.state.list]
  const updateList = list.filter(item => item.id !== id)
  this.setState({list: updateList})
}

//PRIO LIST
addToPrio=(id,value)=>{
  const list2 = [...this.state.list2]
  const newTask2={ id:id,value:value}
  list2.push(newTask2)
  this.setState({list2})
  const list = [...this.state.list]
  const updateList = list.filter(item => item.id !== id)
  this.setState({list: updateList})
}

deleteTask2=(id)=>{
  const list = [...this.state.list2]
  const updateList = list.filter(item => item.id !== id)
  this.setState({list2: updateList})
}

changeHandler=(event)=>{
  this.setState({
    newTask: event.target.value
  })
}

render(){
  return(
    <div>
    <div className='outerInputDiv'>
      <div className='inputDiv'>
        <textarea name="task" type="text" placeholder='Add Task Here' value={this.state.newTask} onChange={this.changeHandler} onKeyPress={e=>{if(e.key==="Enter"){this.addTask()}}}/>
        <button className='button' onClick={this.addTask}><MdAddCircle/></button> 
      </div>
      <div className='error'>{this.state.error}</div>
    </div>  
        <div>
          <ul>{this.state.list2.map(item =>{
            return(
              <li className='li2' key={item.id}>
              <div>
                  <button 
                  className='button3' 
                  onClick={()=>this.deleteTask2(item.id)}>
                  <MdDelete/>
                  </button>
                </div>
                <span><MdLabelImportant/>   {item.value}</span>
              </li>
            )
          })}</ul>
          <ul>{this.state.list.map(item=>{
            return(
              <li className='li1' key={item.id}>
                <div>
                    <button 
                    className='button2'
                    onClick={()=>this.addToPrio(item.id,item.value)}
                    >
                    <MdLabelImportant/>
                    </button>

                    <button 
                    className='button2' 
                    onClick={()=>this.deleteTask(item.id)}>
                    <MdDelete/>
                    </button>
                </div>
                {item.value}
              </li>
            )
          })}</ul>
        </div>
    </div>
  )
  }
}
export default App;
