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

  const openModalEdit = () => {
    setShowModalEdit(true);
  };
  const openModalDel = () => {
    setShowModalDel(true);
    setTimeout(() => {
      setCardVisible(false);
    }, 2600)
  };

  const alterUserModal = (eachUser) => {
    openModalEdit();
  };

  if (!cardVisible) {
    return null; //retorna null se o card não estiver visível
  }


  return (
    <ContainerCard>
      <InfosOrder> ID: {eachUser.id} </InfosOrder>
      <InfosOrder> CARGO: {eachUser.role} </InfosOrder>
      <InfosOrder> EMAIL: {eachUser.email} </InfosOrder>
      <DivButton>
        <Button
          id="cardCollaborator delete"
          onClick={() => deleteUser(eachUser.id).then(openModalDel())}
        >
          EXCLUIR
        </Button>
        <Button
          id="cardCollaborator change"
          onClick={() => alterUserModal(eachUser.id)}
        >
          ALTERAR
        </Button>
      </DivButton>
      <ModalEditCollaborators
        className="edit"
        eachUser={eachUser}
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
