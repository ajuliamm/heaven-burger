import styled from "styled-components";

export const Container = styled.div`
    background-color: #7B451C;
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
    gap: 10px;
`;
