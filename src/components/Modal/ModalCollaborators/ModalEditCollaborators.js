import Modal from "react-modal";
import React, { useState } from "react";
import { H2, Input, Label } from "./Styles";
import Button from "../../Button/Button";
import { alterUser } from "../../../API/Users";

const ModalEditCollaborators = ({
  eachUser,
  textH2,
  showModal,
  setShowModal,
}) => {
  const [valueEmail, setValueEmail] = useState(eachUser.email);
  const [valueRole, setValueRole] = useState(eachUser.role);

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
    console.log(infoChanges);
    alterUser(eachUser.id, infoChanges);
    setShowModal(false);
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
          <Input
            type="text"
            placeholder="Cargo"
            value={valueRole}
            onChange={changerole}
          ></Input>
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
