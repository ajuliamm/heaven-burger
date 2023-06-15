import React, { useState } from "react";
import Button from "../Button/Button";
import { Container, Infos, Div } from "./Styles";
import { deleteProducts } from "../../API/Products";
import ModalEdit from "../Modal/ModalEditProduct";

const CardProducts = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const editThisProduct = () => {
    openModal();
  };
  
  const translateType = (type) => {
    const translate = {
      breakfast: "Café da Manhã",
      appetizers: "Aperitivos",
      hamburgers: "Hambúrgueres",
      drinks: "Bebidas",
    };

    return translate[type];
  };

  return (
    <Container>
      <Div />
      <Infos>N° PRODUTO: {product.id}</Infos>
      <Infos>NOME: {product.name}</Infos>
      <Infos>PREÇO: {product.price.toFixed(2)}</Infos>
      <Infos>TIPO: {translateType(product.type)}</Infos>
      <Div className="buttons">
        <Button
          id="cardProduct delete"
          onClick={() => deleteProducts(product.id)}
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
