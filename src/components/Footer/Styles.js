import styled from "styled-components";
export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    color:#834a2f;
    font-weight:500;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: #834a2f;
        color:#E38B26;
    }
    &:hover::before{
        font-size:13px;
        color: brown;
        content: "clique aqui para nos conhecer";
        position: absolute;
        top: -18px;
        left: 10;

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
