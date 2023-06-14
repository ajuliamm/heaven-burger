import styled from "styled-components";

export const ContainerCard = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d49566;
  min-width: 450px;
  height: 155px;
  border-radius: 15px;
  position: relative;

  @media (min-width: 950px) {
    width: 35vw;
  }

`;

export const InfosOrder = styled.p`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: #451e12;
  padding-left: 10px;
  padding-top:10px;

`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
`;
