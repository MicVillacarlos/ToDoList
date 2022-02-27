import styled from 'styled-components'

export const Container = styled.div`

    li{
        background-color: #a9eed3;
        color: black;
        list-style: none;
        margin-top: 10px;
        padding: 10px;
        height: 5em;
        width:250px;
        display: block;

    }
    button{
        border: 0;
        background-color:transparent;

        &:hover{
            color: white;
            cursor: pointer;
        }
    }
   
`

export const taskContainer =  styled.div`
    background-color: #d36565;

`