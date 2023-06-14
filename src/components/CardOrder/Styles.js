import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #d49566;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  position: relative;

  @media (min-width: 950px) {
    width: 35vw;
  }
`;

export const InfosOrder = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #451e12;
  padding-left: 10px;

  &.client {
    margin-top: 10px;
  }
  &.infoCheck{
    color: #DB9E71;
    font-size: 11.5px;
    padding-left: 0px;
  }
`;

export const ItemOrder = styled.li`
  color: #451e12;
  padding-left: 10px;
  list-style: none;
  font-size: 14px;
`;

export const OrderList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 10px 0;
`;

export const Status = styled.div`
  width: 100%;
  height: 35px;
  background-color: #d37a15;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 15px 15px;
  &.pending{
    background-color: #d37a15;
  }
  &.finished{
    background-color: #56791A;
  }
  &.finished.atend {
    width:calc(100% - 80px) ;
    border-radius: 0px 0px 0px 15px;
  }
  &.pending.chef {
    width:calc(100% - 70px) ;
    border-radius: 0px 0px 0px 15px;
  }
`;

export const ButtonIcon = styled.button`
  color: #e48b26;
  font-size: 30px;
  cursor: pointer;
  background-color: #000000;
  width: 70px;
  height: 100%;
  align-self: flex-end;
  position: absolute;
  border-radius: 0 15px 15px 0;
  border: none;
  display: none;

  &:hover {
    background-color: #292424;
  }
  &:active {
    opacity: 0.9;
  }
  &.pending.chef{
    display:block;
  }
  &.finished{
    display:none;
  }
`;

export const ButtonCheck = styled.button`
  color: #e48b26;
  font-size: 30px;
  cursor: pointer;
  background-color: #451E12;
  width: 80px;
  height: 100%;
  align-self: flex-end;
  position: absolute;
  border-radius: 0 15px 15px 0;
  border: none;
  display: none;


  &.pending{
    display: none;
  }
  &.finished.atend {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;
