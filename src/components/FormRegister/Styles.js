import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const H1 = styled.h1`
    // color: ${props => props.color};
    margin: 20px 0 50px 0;
    &.login{
        color: #E48B26;
    }
    &.register{
        color: #64300F;
    }
`;



export const MessageError = styled.p`
    color: ${props => props.color};
    font-weight: 700;
    font-size: 18px;
    &.hidden-p{
        display: none;
    }
`;

export const Div = styled.div`
    &.hidden{
        display: none;
    }

    &.active{
        display: block;
    }
`;

export const TextRegister = styled.p`
    color: ${props => props.color};
    font-weight: 700;
    font-size: 18px;
    align-self: self-start;
`;

export const Select = styled.select`
    background-color: rgb(69,30,18,50%);
    color: #E8B25A;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
`;