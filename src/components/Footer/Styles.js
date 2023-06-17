import styled from "styled-components";
export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    color:#834a2f;
    font-weight:500;
    padding: 0 5px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 5px;

    &:hover{
        background-color: #451E12;
        color:rgb(233, 147, 49);
        transition: background-color 1s linear;
        -webkit-transition: background-color 1s;
    }
    &:hover::before{
        font-size:13px;
        color: #451E12;
        content: "clique aqui para nos conhecer";
        position: absolute;
        top: -18px;
        left: 10;
        transition: font-size 01s linear;
        -webkit-transition:font-size 1s;
    }

    

    @media(min-width:850px){
        position: absolute;
        bottom: 0;
        left: calc(50% - 140px);
    }
`;
export const Paragrafo = styled.p`
    
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
