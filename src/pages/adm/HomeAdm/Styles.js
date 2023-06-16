import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.backgroundColor}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    @media(min-width: 850px) {
        flex-direction:row;
    }
`;

export const Main = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:calc(100vh - 150px);
    
    @media(min-width: 850px) {
        height:100vh;
        width:calc(100vw - 100px);
    }
`;