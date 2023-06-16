import Modal from "react-modal";
import React, { useState } from "react";
import { H2, Input, Label, SelectRole } from "./Styles";
import Button from "../../Button/Button";
import { alterUser } from "../../../API/Users";

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

const ModalEditCollaborators = ({
  eachUserData,
  setEachUserData,
  textH2,
  showModal,
  setShowModal,
}) => {
  const [valueEmail, setValueEmail] = useState(eachUserData.email);
  const [valueRole, setValueRole] = useState(eachUserData.role);

  const changeEmail = (event) => {
    setValueEmail(event.target.value);
  };

  const changerole = (event) => {
    setValueRole(event.target.value);
  };

  function closeModal() {
    setShowModal(false);
  }

  const saveInfos = () => {
    const infoChanges = {
      email: valueEmail,
      role: valueRole,
    };
    alterUser(eachUserData.id, infoChanges).then(()=>{
      setEachUserData({
        ...eachUserData, 
        email:valueEmail,
        role: valueRole
      })
      setShowModal(false);
    })
    
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Modal alterar colaborador"
        style={{
          overlay: {
            position: "absolute",
            top: "calc(50vh - 150px)",
            left: "calc(50vw - 190px)",
            backgroundColor: "#E48B26",
            width: "380px",
            height: "350px",
            borderRadius: "10px",
          },

          content: {
            fontSize: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "15px",
            border: "1px solid",
            background: "rgb(69,30,18,80%)",
            borderRadius: "15px",
            color: "#E99331",
          },
        }}
      >
        <H2 className="edit"> {textH2} </H2>
        <div>
          <Label>Email:</Label>
          <Input
            type="text"
            placeholder="Email"
            value={valueEmail}
            onChange={changeEmail}
          ></Input>
        </div>
        <div>
          <Label>Cargo:</Label>
          <SelectRole value={valueRole} onChange={changerole}>
            <option value='atend'>Atendente</option>
            <option value='chef'>Chefe de Cozinha</option>
            <option value='admin'>Administrador</option>
          </SelectRole>
        </div>
        <div>
          <Button id="buttonModal cancel" onClick={() => closeModal()}>
            CANCELAR
          </Button>
          <Button id="buttonModal save" onClick={() => saveInfos()}>
            SALVAR
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalEditCollaborators;
