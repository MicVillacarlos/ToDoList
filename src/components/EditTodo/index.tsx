import { Container,ButtonContainer } from './style'
import React from 'react'

type EditTodoProps  ={
    onClick: any
    onChange: any
    value:string
}

const EditTodo = (props: EditTodoProps) => {
  return (
    <Container>
        <textarea value={props.value} onChange={(e)=>props.onChange(e)}/>
        <ButtonContainer>
            <button onClick={props.onClick}>
                Edit Task
            </button>       
        </ButtonContainer>
    </Container>
  )
}

export default EditTodo