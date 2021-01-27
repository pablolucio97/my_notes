import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #22eeaa;
    padding-left: 30px;
    padding-right: 20px;
    background-color: #77ff;
    @media(max-width: 480px){
        display: flex;
        justify-content: center
    }
`

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 40px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    border: none;
    outline: 1px solid #22eeaa;
    border-radius: 2px;
     
`

export const HandleNotesContainer = styled.div`
    display: flex;
    width: 700px;
    justify-content: space-between;
    align-items: flex-start;
    margin: 100px auto 0px;

    @media(max-width: 1080px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

`


export const NewNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #333;
    outline: 1px solid #22eeaa;

    
    @media(max-width: 1080px){
        margin: 50px;
    }

`

export const NotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    outline: 1px solid #77ff;
    width: 300px;
    height: 300px;
    padding: 15px;
    background-color: ${props => props.theme.colors.background};
    overflow-y: scroll;
`

export const DropContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;

margin: 50px auto;
align-content: center;
align-self: center;
width: 100%;

    @media(max-width: 1080px){
    flex-wrap: wrap;
    }

`

export const DropaArea1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
background-color: #43d322;
margin: 5px;
transition: all .33s ease-in-out;

    &:hover{
        transform: scale(1.03);
        }
`

export const DropaArea2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
background-color: #fff000;
margin: 5px;
transition: all .33s ease-in-out;

    &:hover{
            transform: scale(1.03);
        }
`

export const DropaArea3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
background-color: #FF8C00;
margin: 5px;
transition: all .33s ease-in-out;

    &:hover{
            transform: scale(1.03);
        }
`

export const DropaArea4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
background-color: #ee1100;
margin: 5px;
transition: all .33s ease-in-out;

    &:hover{
            transform: scale(1.03);
        }
`

export const ButtonAdd = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 40px;
    border-radius: 2px;
    margin-top: 10px;
    outline: none;
    border: none;
    transition: all .13s ease-in-out;
    background-color: #77ff;

    &:hover {
        cursor: pointer;
        background-color: #22eeaa;
    }
`

export const MainTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;  
    margin: 20px;
    color: #222;
`

