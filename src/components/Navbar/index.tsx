import React from 'react';
import { Container } from './style';
import { Input } from 'antd';

type NavbarProps = {
  addTask: any;
  value: any;
  onChangeHandler: any;
}

export const Navbar = (props: NavbarProps) => {

    return(
        <Container>
          <Input 
                style={{width:'300px',height:'2em'}} 
                placeholder="Type task here"
                value={props.value} onChange={ props.onChangeHandler }
                />
          <button onClick={props.addTask}>
            Add Task
          </button>
        </Container>
    )
}
