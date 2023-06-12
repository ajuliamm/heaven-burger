import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #d49566;
  min-width: 300px;
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
`;

export const ButtonIcon = styled.button`
  color: #e48b26;
  font-size: 30px;
  cursor: pointer;
  background-color: #000000;
  width: 60px;
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
  &.chef {
    display: block;
  }
  &.pending{
    display:block;
  }
  &.finished{
    display:none;
  }
`;
