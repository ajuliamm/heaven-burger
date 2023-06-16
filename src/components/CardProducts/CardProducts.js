import React, { useState } from "react";
import Button from "../Button/Button";
import { Container, Infos, Div } from "./Styles";
import { deleteProducts } from "../../API/Products";
import checkIcon from "../../img/icon_check.png";
import ModalEdit from "../Modal/ModalEditProduct";
import ModalEx from "../Modal/Modal";


const CardProducts = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);
  const [showModalDel, setShowModalDel] = useState(false);
  const [productData, setProductData] = useState(product)
  //criar estado com o valor do products

  const openModal = () => {
    setShowModal(true);
  };
  const openModalDel = () => {
    setShowModalDel(true);
  };

  const editThisProduct = () => {
    openModal();
  };

  const deleteItem = (productId) => {
    deleteProducts(productId)
    .then(()=>{
      openModalDel()
      setTimeout(() => {
        setCardVisible(false);
      }, 1500);
    })
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
      <Infos>N° PRODUTO: {productData.id}</Infos>
      <Infos>NOME: {productData.name}</Infos>
      <Infos>PREÇO: {parseFloat(productData.price).toFixed(2)}</Infos>
      <Infos>TIPO: {translateType(productData.type)}</Infos>
      <Div className="buttons">
        <Button
          id="cardProduct delete"
          onClick={() => deleteItem(productData.id)}
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
        product={productData}
        setProduct = {setProductData}
        textH2="Alteração de Produto"
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ModalEx
        textH2="Produto excluído!"
        src={checkIcon}
        showModal={showModalDel}
        setShowModal={setShowModalDel}
      />
    </Container>
  );
};

export default CardProducts;
