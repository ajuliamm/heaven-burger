import styled from "styled-components";

export const H1 = styled.h1`
    color:#E99331;
`;

export const Container = styled.div`
    background-color: ${props => props.backgroundColor}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: auto;
    gap: 10px;
    height: 55vh;
`;