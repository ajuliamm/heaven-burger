import React from "react";
import { Container, Main, Icon } from "./Styles";
import Button from "../../../components/Button/Button";
import NavbarAdm from "../../../components/Navbar/NavbarAdm";
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


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
      <NavbarAdm/>
      <Main>
        <Button onClick={changeToRegister} id="add">ADICIONAR COLABORADORES <Icon><i class="bi bi-person-fill-add"></i></Icon></Button>
        <Button onClick={changeToAddProducts} id="add">ADICIONAR PRODUTOS <Icon><i class="bi bi-cart-plus-fill"></i></Icon></Button>
      </Main>
    </Container>
  );
};

export default Add;
