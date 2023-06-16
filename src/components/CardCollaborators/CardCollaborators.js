import React, { useState } from "react";
import { ContainerCard, InfosOrder, DivButton } from "./Styles";
import Button from "../Button/Button";
import { deleteUser } from "../../API/Users";
import ModalEditCollaborators from "../Modal/ModalCollaborators/ModalEditCollaborators";
import ModalConfirm from "../Modal/Modal";
import checkIcon from "../../img/icon_check.png";


const CardCollaborator = ({ eachUser }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);
  const [eachUserData, setEachUserData] = useState(eachUser)

  const openModalEdit = () => {
    setShowModalEdit(true);
  };
  const openModalDel = () => {
    setShowModalDel(true);
    setTimeout(() => {
      setCardVisible(false);
    }, 2600);
  };

  const alterUserModal = (eachUser) => {
    openModalEdit();
  };

  const translateRole = (role) => {
    const translate = {
      admin: 'Administrador',
      atend: 'Atendente',
      chef: 'Chefe de Cozinha'
    }
    return translate[role];
  }

  if (!cardVisible) {
    return null; //retorna null se o card não estiver visível
  }


  return (
    <ContainerCard>
      <InfosOrder> ID: {eachUserData.id} </InfosOrder>
      <InfosOrder> CARGO: {translateRole(eachUserData.role)} </InfosOrder>
      <InfosOrder> EMAIL: {eachUserData.email} </InfosOrder>
      <DivButton>
        <Button
          id="cardCollaborator delete"
          onClick={() => deleteUser(eachUserData.id).then(openModalDel())}
        >
          EXCLUIR
        </Button>
        <Button
          id="cardCollaborator change"
          onClick={() => alterUserModal(eachUserData.id)}
        >
          ALTERAR
        </Button>
      </DivButton>
      <ModalEditCollaborators
        className="edit"
        eachUserData={eachUserData}
        setEachUserData = {setEachUserData}
        textH2="Alteração de Colaborador"
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />
      <ModalConfirm
        textH2="Colaborador Excluído"
        src={checkIcon}
        showModal={showModalDel}
        setShowModal={setShowModalDel}
      />
      
    </ContainerCard>
  );
};

export default CardCollaborator;
