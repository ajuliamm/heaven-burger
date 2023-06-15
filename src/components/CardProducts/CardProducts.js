import React, { useState } from "react";
import Button from "../Button/Button";
import { Container, Infos, Div } from "./Styles";
import { deleteProducts } from "../../API/Products";
import ModalEdit from "../Modal/ModalEditProduct";

const CardProducts = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const editThisProduct = () => {
    openModal();
  };

  const deleteItem = (item) => {
    deleteProducts(item);
    setTimeout(() => {
      setCardVisible(false);
    }, 1000);
  }
  
  const translateType = (type) => {
    const translate = {
      breakfast: "Café da Manhã",
      appetizers: "Aperitivos",
      hamburgers: "Hambúrgueres",
      drinks: "Bebidas",
    };

    return translate[type];
  };

  if (!cardVisible) {
    return null; //retorna null se o card não estiver visível
  }

  return (
    <Container>
      <Div />
      <Infos>N° PRODUTO: {product.id}</Infos>
      <Infos>NOME: {product.name}</Infos>
      <Infos>PREÇO: {product.price}</Infos>
      <Infos>TIPO: {translateType(product.type)}</Infos>
      <Div className="buttons">
        <Button
          id="cardProduct delete"
          onClick={() => deleteItem(product.id)}
        >
          EXCLUIR
        </Button>
        <Button
          id="cardProduct change"
          onClick={() => editThisProduct()}
        >
          ALTERAR
        </Button>
      </Div>
      <ModalEdit
        className="edit"
        product={product}
        textH2="Alteração de Produto"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  );
};

export default CardProducts;
