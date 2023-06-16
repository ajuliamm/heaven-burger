import React from "react";
import { useNavigate } from 'react-router-dom';
import { StyledFooter, Paragrafo, Div } from "./Styles";
const Footer = () => {

  const navigate = useNavigate();

  function changeToDevsScreen(e) {
        navigate('/Devs');
}

  return (
    <StyledFooter onClick={changeToDevsScreen}>
      <Div >
      <Paragrafo>Ana Leticia B. Prince e Angelina Melo</Paragrafo>
      <Paragrafo>Turma 9 - Laboratoria, 2023.</Paragrafo>
      </Div>
    </StyledFooter>
  );
};
export default Footer;
