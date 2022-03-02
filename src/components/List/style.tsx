import styled from 'styled-components'

export const Container = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   
`
export const ListContainer = styled.div`
    li{
        background-color: #f1fcc1;
        color: black;
        list-style: none;
        margin-top: 20px;
        padding: 10px;
        height: 5em;
        width:250px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-radius: 10px;
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