import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    font-weight: 800;
    color: #3E180C;
    background-color: rgb(69,30,18,30%);

    &:hover{ 
        background-color: #E48B26;
        color: black;
    }
    &:active{
        opacity: .5;
    }
    &.register{
        color: #3E180C;
        background-color: rgb(69,30,18,30%);
    }
    &.login{
        color: #E48B26;
        background-color: rgb(176,136,90,17%);
    }
    &.btnMenu{
        background-color: #2D0F05;
        color: #E99331;
        width: 170px;

        &:hover{ 
            background-color: #E48B26;
            color: black;
        }
        &:active{
            opacity: .5;
        }
    }
    &.orderResume{
        background-color: #E48B26;
        height: 30px;
        width: 250px;
        border-radius: 6px;

        &:hover{ 
        opacity: .8;

        &:active{
        opacity: .5;
        }
    }

    }

    &.hidden{
        display: none;
    }
`;