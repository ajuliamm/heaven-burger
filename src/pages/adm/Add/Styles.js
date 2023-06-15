import styled from "styled-components";

export const Container = styled.div`
    background-color: #683923;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 850px) {
        flex-direction: row;
    }

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
`;
export const Icon = styled.span`
    font-size: 70px;
    @media(min-width: 670px){
        font-size: 100px;
        }
`;
export const Div = styled.div`
    display: flex;
    gap: 10px;
`;
