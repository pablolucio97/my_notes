import styled from 'styled-components'

export const ModalContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222;
    width: 300px;
    outline: 1px solid #77ff;
    outline-offset: 12px;
    
`

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 40px;
    background: #222;
    color: #fff;
    border: none;
    outline: 1px solid #22eeaa;
    border-radius: 2px;
     
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