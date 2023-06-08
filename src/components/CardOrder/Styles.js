import styled from "styled-components";

export const ContainerCard = styled.div`
    padding-top:15px;
    background-color:#D49566;
    min-width:300px;
    min-height:200px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    border-radius: 15px;
    @media(min-width: 950px) {
        width:35vw;
    }
`;

export const InfosOrder = styled.p`
    font-weight: 700;
    font-size: 14px;
    color:#451E12;
    padding-left:10px;

`;

export const ItemOrder = styled.li`
    color:#451E12;
    padding-left:10px;
    list-style:none;
    font-size: 14px;
`;

export const OrderList = styled.ol`
    display: flex;
    flex-direction:column ;
    
`;

export const Status = styled.div`
    width:100%;
    height:40px;
    background-color:#D37A15;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 0px 0px 15px 15px;
`;

