import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.backgroundColor}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`;

export const Nav = styled.nav`
    width: 100%;
    height:100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
`;

export const Header = styled.header`
    background: #451E12;
    padding: 0 40px;
    width:100vw;
    height: 100px;
`;

export const Button = styled.button`
    color: #DB9E71;
    font-size:40px;
    background: transparent;
    border:none;
`;

export const Main = styled.main`

`;

export const Image = styled.img`
    width: 350px;

`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Paragrafo = styled.p`
    
`;