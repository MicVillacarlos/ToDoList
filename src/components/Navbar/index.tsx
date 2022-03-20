import React from 'react';
import { Container} from './style';
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return(
        <Container>
          <div>
            <Link to='/'><h1>To Do APP</h1> </Link>
          </div>
        </Container>
    )
}
