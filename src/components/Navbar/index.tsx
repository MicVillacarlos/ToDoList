import React from 'react';
import { Container,NavbarItems, LogoContainer} from './style';
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return(
        <Container>
          <LogoContainer>
            <Link to='/' > <h2>TO DO APP</h2> </Link>
          </LogoContainer>
          <NavbarItems>
            <Link to='/tasks/add'> <p>Create To Do</p></Link>
            <p> | </p>
            <Link to='/tasks'> <p>To do list</p></Link>
          </NavbarItems>
        </Container>
    )
}
