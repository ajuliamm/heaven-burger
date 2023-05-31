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
    min-height: 55vh;;
    gap: 15px; 
    padding:10px 5px;
    @media(min-width: 746px) {
        width: 50vw;
        min-height: 100vh;
        padding:70px 0 10px 0;
    }
    @media(min-width: 850px) {
        width: calc(50vw - 50px);
        min-height: 100vh;
    }
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
    margin:3px 0;
    /* border: 2px solid #fff; */
    
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
    justify-content:center;

    &.styleName{
        width:200px;
        text-align: center;
    }

    &.stylePrice{
        width:50px;
    }
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
    &:hover{
        opacity: .8;
    }
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