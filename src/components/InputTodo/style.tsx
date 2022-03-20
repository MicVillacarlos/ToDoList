import styled from 'styled-components';
export const Container = styled.div`

    padding:10px;
    display:flex;
    align-items:center;
    justify-content:center;

    button{
        margin: 10px;
        border-radius: 10px;
        border: 0px;
        padding: 7px;

        &:hover{
            background-color: #f7b3b3;
            color:white;
            cursor: pointer;
        }
        &:active{
            border: solid 2px #df6363;
        }
    }
`
