import styled from "styled-components";

export const H1 = styled.h1`
    color:#E99331;
    font-size:26px;
`;

export const Container = styled.div`
    background-color: ${props => props.backgroundColor}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: auto;
    gap: 15px;
    height: 55vh;
    padding:10px 5px;
`;

export const DivItem = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: #F4AC5B;
    background:#F4AC5B;
    padding: 0 5px;
    width:330px;
    gap:15px;
    border: 2px solid #fff;
    
`;

export const ContainerItem = styled.div`
    
    border-top: 2px solid #683923;
    border-bottom:2px solid #683923;
    padding: 10px 0 ;
`;

export const InfoItem = styled.li`
    color:white;
    list-style:none;
    font-weight:700;
    color: #451E12;
    display:flex;
    text-align: center;
`;

export const DivQtd = styled.div`
    display: flex;
    gap: 8px;
`;

export const BtnQtd = styled.button`
    color: rgb(69,30,18);
    border: none;
    font-size:20px;
    background:transparent;
`;

export const H3 = styled.p`
    display: flex;
    width: 320px;
    justify-content: center;
    color: #F4AC5B;
`;

export const Quantity = styled.span`
    font-size: 20px;
`;

export const Total = styled.p`
    font-size: 20px;
    color:#E99331;
`;