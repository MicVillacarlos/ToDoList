import styled from 'styled-components'

export const Container = styled.div`
    background-color: #00000055;
    padding: 4em;
    position:absolute;
    margin-top:50vh;
    border-radius:10px;
    textarea{ 
        resize:none
    }
`
export const ButtonContainer = styled.div`
    button{
        border: 0;
        border-radius: 10px;
        &:hover{
            background-color: transparent;
            border: 1px solid white;
            color: white;
            cursor: pointer;
        }
    }
`