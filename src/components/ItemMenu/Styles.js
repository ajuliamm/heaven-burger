import styled from "styled-components";

export const BtnItem = styled.button`
    background-color: #DB9E71;
    display: flex;
    padding: 0 10px;
    width: 300px;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border:none;

    &:hover{
        opacity: .8;;
    }
    &:active{
        opacity: .5;;
    }

`;
export const ValueItem = styled.p`
    color:#451E12;
    font-weight: 700;
`;

export const DivQtd = styled.div`
    display: flex;
    gap: 5px;
    display: none;
`;

export const BtnQtd = styled.button`
    background: transparent;
    border: none;
    display: none;
`;

export const Quantity = styled.span`

`;