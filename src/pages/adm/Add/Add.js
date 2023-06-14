import React from "react";
import { Container, Main } from "./Styles";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();

    function changeToAddProducts(e){
        e.preventDefault();
        navigate('/AddProducts');
    }

    function changeToRegister(e){
        e.preventDefault();
        navigate('/Register');
    }


  return (
    <Container>
      <Main>
        <Button onClick={changeToRegister} id="add">ADICIONAR COLABORADORES</Button>
        <Button onClick={changeToAddProducts} id="add">ADICIONAR PRODUTOS</Button>
      </Main>
    </Container>
  );
};

export default Add;
