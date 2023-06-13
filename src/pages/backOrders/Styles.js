import styled from "styled-components";

export const Container = styled.div`
  background-color: #683923;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const H1 = styled.h1`
  margin: 40px 0;
`;

export const H3 = styled.h3`
  margin: 40px 0;
`;

export const Main = styled.main`
  display: flex;
  color: #e99331;

  @media (min-width: 850px) {
    width: calc(100vw - 100px);
    height: 100vh;
    align-items: center;
    color: #e99331;
  }
`;

export const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  height: calc(100vh - 100px);
  width: 100vw;

  @media (min-width: 870px) {
    width: calc(100% - 420px);
    height: 100vh;
  }

  /*Estilização da barra de rollagem*/
  &::-webkit-scrollbar-track {
    background-color: #603516;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background: #603516;
  }
  &::-webkit-scrollbar-thumb {
    background: #451e12;
  }
`;

export const SectionImg = styled.section`
  display: none;

  @media (min-width: 870px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 420px;
    height: 100vh;
    background-color: #7b451c;
    justify-content: end;
  }
`;

export const Image = styled.img`
  width: 420px;
`;

export const SadBurgerIcon = styled.img`
  width: 200px;
`;
