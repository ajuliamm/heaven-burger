import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { postRegister } from "../../API/Users";
import { useNavigate } from "react-router-dom";
import { StyledForm, H1, MessageError, Div, TextRegister } from "./Styles";
import ModalRegister from "../Modal/Modal";
import IconCheck from "../../img/icon_check.png";

const Form = (props) => {
  const [modalUser, setModalUser] = useState(false);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const msgEmptyFild = useRef();
  const msgErrorLogin = useRef();
  const team = useRef();

  function openModal() {
    setModalUser(true);
  }

  function changeToAdd(e) {
    e.preventDefault();
    navigate("/Add");
  }

  function btnLogar(e) {
    e.preventDefault();
    console.log(team.current.value)
    if (email.current.value === '' || password.current.value === '' || team.current.value === '...') {
      msgEmptyFild.current.classList.remove("hidden-p");
      msgErrorLogin.current.classList.add("hidden-p");
    } else {
      msgEmptyFild.current.classList.add("hidden-p");
      postRegister(email.current.value, password.current.value, team.current.value ).then(()=>{
        openModal();
        email.current.value = '';
        password.current.value = '';
        team.current.value = '...';

    });
    }
  }
  return (
    <StyledForm className={props.class}>
      <H1 color="#E48B26" className={props.class}>
        {props.text}
      </H1>
      <Input class={props.class} ref={email} placeholder="Email" type="email" />
      <Input
        ref={password}
        class={props.class}
        placeholder="Senha"
        type="password"
      />
      <Div className={props.classSelect}>
        <TextRegister color="#3E180C"> Qual é o seu time? </TextRegister>
        <Select ref={team} color="#E8B25A" />
      </Div>
      <MessageError ref={msgErrorLogin} className="hidden-p" color="#E48B26">
      </MessageError>
      <MessageError ref={msgEmptyFild} className="hidden-p" color="#E48B26">
        Preencha todos os campos{" "}
      </MessageError>
      <Button
        type="submit"
        id={props.class}
        onClick={(e) => {
          btnLogar(e);
        }}
      >
        CADASTRAR
      </Button>
      <Button type="button" id={props.class} onClick={changeToAdd}>
        VOLTAR
      </Button>
      <ModalRegister
        textH2="Cadastro Efetuado!"
        src={IconCheck}
        showModal={modalUser}
        setShowModal={setModalUser}
      />
    </StyledForm>
  );
};

export default Form;
