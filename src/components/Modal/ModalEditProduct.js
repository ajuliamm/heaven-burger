import Modal from "react-modal";
import React, { useState } from "react";
import { Input, Label, SelectTypeProduct, H2 } from "./Styles.js";
import Button from "../Button/Button.js";
import { updateProduct } from "../../API/Products.js";

const ModalEdit = ({ product, textH2, showModal, setShowModal }) => {
  function closeModal() {
    setShowModal(false);
  }

  const [valueName, setValueName] = useState(product.name);
  const [valuePrice, setValuePrice] = useState(parseFloat(product.price).toFixed(2));
  const [valueType, setValueType] = useState(product.type);

  const changePrice = (event) => {
    setValuePrice(event.target.value);
  };

  const changeName = (event) => {
    setValueName(event.target.value);
  };

  const changeType = (event) => {
    setValueType(event.target.value);
  };

  const saveInfos = () => {
    const infoChanges = {
      name: valueName,
      price: valuePrice,
      type: valueType,
    };
    updateProduct(product.id, infoChanges);
    setShowModal(false);
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Modal alterar produto"
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
        <H2 className="edit">{textH2}</H2>
        <div>
          <Label>Nome:</Label>
          <Input
            type="text"
            value={valueName}
            onChange={changeName}
            placeholder="Nome do produto"
          ></Input>
        </div>
        <div>
          <Label>Preço:</Label>
          <Input
            type='number'
            value={valuePrice}
            onChange={changePrice}
            placeholder="10,00"
          ></Input>
        </div>
        <div>
          <Label placeholder="Hamburguer">Tipo:</Label>
          <SelectTypeProduct value={valueType} onChange={changeType}>
            <option value="breakfast">CAFÉ DA MANHÃ</option>
            <option value="appetizers">APERITIVOS</option>
            <option value="hamburgers">HAMBURGUERS</option>
            <option value="drinks">BEBIDAS</option>
          </SelectTypeProduct>
        </div>
        <div>
          <Button id="buttonModal cancel" onClick={() => setShowModal(false)}>
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

export default ModalEdit;
