import React from 'react'
import { Container } from './style'
import { MdDelete } from 'react-icons/md'

type ListProps = {
    list: any;
    deleteTask: any
    
}

export const List = (props: ListProps) => {

  return (
    <Container>
        {props.list ? 
        <ul>
            {props.list.map((task:any)=>{
                return(
                    <li key={task.id}>
                        <button onClick={()=>props.deleteTask(task.id)}>
                            <MdDelete/>
                        </button> 
                        {task.value}
                    </li>
                )
            })}
            
        </ul> : null}
    </Container>

  )
}
