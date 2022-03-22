import React from 'react'
import { Container} from './style'
import { Button } from 'antd';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Container>
      <Link to="/tasks/add">
         <Button type="dashed">
          CREATE TO DO
        </Button>
      </Link>  
    </Container>
  )
}

