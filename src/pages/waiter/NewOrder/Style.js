import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.backgroundColor}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;

    @media(min-width: 850px) {
        flex-direction:row;
    }
`;

export const Main = styled.main`
    display:flex;
    flex-direction:column;

    @media(min-width: 746px) {
        flex-direction: row;
    }
`;
