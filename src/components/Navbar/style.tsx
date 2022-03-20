import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');

    background-color: black;
    font-family:"Bungee Inline";
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding:1em;

    p{
        color: white
    }

    h1{
        font-family: 'Bungee Inline', cursive;
        color: white;
        margin: 0;
        &:active{
            color:#FEDE09;
        }
    }
`