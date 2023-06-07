import styled from "styled-components";
export const Container = styled.div`
    background-color: #683923; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    gap: 10px;
    @media(min-width: 850px) {
        flex-direction: row;
    }
`;

export const Main = styled.main`
    display:flex;
    flex-direction:column;
    color: #E99331;


    @media(min-width: 850px) {
        width:calc(100vw - 100px);
        height:100vh;
        align-items:center;
        padding:10px;
       

    }
`;