import styled from "styled-components";
import bgTech from "../../img/bgTechBrown.jpg"
import { Button } from "../../components/Navbar/Styles";

export const Container = styled.div`
    background-image: url(${bgTech});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    padding: 70px;


    @media(min-width: 630px) {
        flex-direction:row;
        padding: 0px;
    }
`;
export const Main = styled.main`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    min-height:100vh;
    width:100vw ;

`;
export const H1 = styled.h1`
    color:#E99331 ;
`;
export const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    @media(min-width: 630px) {
        flex-direction: row;
        
    }
`;
export const DivDev = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    
`;
export const DivIcon = styled.div`
    display:flex;
    justify-content:center;
    
    gap: 40px;
    background-color: black;
    width: 290px;
    height: 70px;
`;
export const Icon = styled.a`
    font-size: 40px;
    color:#E99331 ;
    cursor: pointer;
    :hover{
        color: beige;
    }
`;
export const ButtonBack = styled.button`
    position: absolute;
    background-color: black;
    color: #E99331 ;
    width: 90px;
    height: 45px;
    top:20px;
    left: 20px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color:#E99331;
        color: black;

    }

`; 