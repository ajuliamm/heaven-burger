import styled from 'styled-components';

export const Container = styled.div`
    background-color: #7B451C;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-height: 35vh;
    padding-top:10px;

    @media(min-width: 746px) {
        width: 50vw;
        min-height: 100vh;
    }
    @media(min-width: 850px) {
        width: calc(50vw - 50px);
        min-height: 100vh;
    }
`;

export const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
    padding: 12px;
    width:370px;
`;
export const H1 = styled.h1`
    background-color: #7B451C;
    color:#E99331;
    font-size:26px;

`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

`;