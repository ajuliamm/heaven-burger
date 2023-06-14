import styled from "styled-components";

export const Container = styled.div`
  background-color: #683923;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e99331;
  gap: 15px;

  @media (min-width: 850px) {
    width: calc(100vw - 100px);
    height: 100vh;
    align-items: center;
    color: #e99331;
    overflow-y: scroll;
  }
`;

export const H1 = styled.h1`
  margin: 40px 0;
  color: #E99331;
`;