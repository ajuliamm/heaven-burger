import Modal from "react-modal";
import React, { useState } from "react";
import { ImgIcon, H2 } from "./Styles.js";
import Button from "../Button/Button.js";

const ModalEx = ({src, textH2, showModal, setShowModal}) => {

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Modal enviar pedido"
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
            gap: "30px",
            border: "1px solid",
            background: "rgb(69,30,18,80%)",
            borderRadius: "15px",
            color: "#E99331",
   
          },
        }}
      >
        <ImgIcon src={src} />
        <H2>{textH2}</H2>
        <Button id="buttonModal" onClick={()=>setShowModal(false)}>
          OK
        </Button>
      </Modal>
    </>
  );
};

export default ModalEx;
