import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    top: 0;
    background-color: black;
    font-family:'Roboto', 'sans';
    width:100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-decoration: none;

    p{
        color: white
    }
`

export const NavbarItems = styled.div`
    display:flex;
    gap:10px;
    margin-right: 3em;
`
    
export const LogoContainer = styled.div`
    text-decoration: none;

    h2{
        color: #98f0e4;
        &:active{
            color:white
        }
    }
`