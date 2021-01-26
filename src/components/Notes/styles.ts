import styled from 'styled-components'


export const Note = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: relative;
    width: 180px;
    min-height: 40px;
    background-color: #333;
    color: #fff;
    margin: 10px;
    border-radius: 1px;
    border-bottom: 2px solid #22eeaa;
    transition: all .33s ease-ease-in-out;

    .dragging{
        background-color: cyan;
    }

`

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 22px;
    right: 2px;
    width: 16px;
    height: 16px;
    background-color: #fff000;
    color: #ffff;
    font-weight: bold;
    border: none;
    outline: none;

    &:hover{
        cursor:pointer
    }
`

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 4px;
    right: 2px;
    width: 16px;
    height: 16px;
    background-color: #ff0000;
    color: #ffff;
    font-weight: bold;
    border: none;
    outline: none;

    &:hover{
        cursor:pointer
    }
`

