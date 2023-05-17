import styled from 'styled-components';

export const StyledInput = styled.input`
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    border: none;
    padding-left:10px;
    box-sizing:border-box;
    outline: none;
    &.login{
        background-color: #C18050;
        color: #451E12;
        
        &::placeholder{
        color: #451E12;
    }
    }
    &.register{
        background-color: rgb(69, 30, 18, 50%);
        color: #E8B25A;

        &::placeholder{
        color: #FDC269; 
    }
    }
   
`;