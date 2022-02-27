import styled from 'styled-components'

export const Container = styled.div`
    top: 0;
    background-color: black;
    color:white;
    width:100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap:10px; 

    button{
        cursor:pointer;

        &:active{
            background-color: #f4f5c6;
        }
    }
`