import styled from "styled-components";

export const Container = styled.div`
  background-color: #D49566;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  position: relative;
  gap:10px;
  padding-bottom: 10px;

  @media (min-width: 950px) {
    width: 35vw;
  }
`;

export const Infos = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #451e12;
  padding-left: 25px;


  &.client {
    margin-top: 10px;
  }
  &.infoCheck{
    color: #DB9E71;
    font-size: 11.5px;
    padding-left: 0px;
  }
`;


export const Div = styled.div`
    background-color: #451E12;
    width: 100%;
    height: 40px;
    border-radius: 15px 15px 0 0;
    &.buttons{
        background-color: transparent;
        height: auto;
        display: flex;
        gap: 20px;
        justify-content:center;
        margin-top: 15px;
    }
`;

export const Button = styled.button`
    color:#DB9E71;
    width: 40%;
    height: 30px;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 15px;
    box-shadow: 0px 2px 2px 0 #451E12;

    &.delete{
        background-color: #C03618;
    }
    &.edit{
        background-color: #C45707;
    }
    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .5;
    }
`;
