import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    height: 100vh;

`
export const H1 = styled.h1`
    color: ${props => props.color};
    margin-bottom: 60px;
`;

export const Input = styled.input`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    border: none;
    padding-left:10px;
    box-sizing:border-box;
    outline: none;

    &::placeholder{
        color: #451e12; 
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

`;

export const Button = styled.button`
    background-color: ${props => props.backgroundColor};
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: ${props => props.color};
    border: none;
    font-weight: 800;

    &:hover{
        background-color:#E48B26;
        color: black;
    }
    &:active{
        opacity: .5;
    }
`;

export const MessageError = styled.p`
    color: ${props => props.color};
    font-weight: 700;
    font-size: 18px;
    display: none;
`;

export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
