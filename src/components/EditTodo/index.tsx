import { Container,ButtonContainer } from './style'
import { EditTodoProps } from '../types/type'
import React from 'react'

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