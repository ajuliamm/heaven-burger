import React, { useEffect, useRef, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import checkIcon from "../../img/icon_check.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { postOrders } from "../../API/Orders";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalEx from "../Modal/Modal";
import SadBurger from "../../img/SadBurger.png";
import OrdersContext from '../../contexts/OrdersContext';
import {
  H1,
  Container,
  DivItem,
  ContainerItem,
  InfoItem,
  DivQtd,
  H3,
  BtnQtd,
  Quantity,
  Total,
  SadBurgerIcon,
} from "./Styles";

const OrderResume = ({ setResume, resume }) => {

  const [sumPrice, setSumPrice] = useState(0);
  const { user } = useContext(UserContext) || {}; // Verifica se UserContext é undefined
  const [showModal, setShowModal] = useState(false);

  const {orders, updateOrders} = useContext(OrdersContext);
  console.log(orders)

  const openModal = () => {
    setShowModal(true);
  };

  const navigate = useNavigate();
  const clientName = useRef();

  useEffect(() => {
    let totalPrice = 0;
    resume.forEach((product) => {
      totalPrice += parseFloat(product.product.price * product.qty); //converte string p decimal
    });

    setSumPrice(totalPrice.toFixed(2));
  }, [resume]);

  function backToHomeScreen(e) {
    e.preventDefault();
    navigate("/HomeWaiter");
  }

  function deleteItem(product) {
    let updateResume = [...resume];
    const foundIndex = resume.findIndex((element) => element === product);
    updateResume.splice(foundIndex, 1);
    setResume(updateResume);
  }

  function changeQtdItem(option, product) {
    const foundIndex = resume.findIndex((element) => element === product);

    if (foundIndex !== -1) {
      const updatedResume = [...resume];
      let qtdProduct = updatedResume[foundIndex].qty; //atualiza a var

      if (option === "increase") {
        qtdProduct++;
      } else {
        if (qtdProduct > 1) {
          qtdProduct--;
        } else {
          return deleteItem(product);
        }
      }
      updatedResume[foundIndex].qty = qtdProduct; //atualiza o estado do resume
      setResume(updatedResume);
    }
  }

  function sendOrder() {
    const currentDateTime = new Date().toLocaleString();
    const client = clientName.current.value;
    const userId = user.id;

    if (client === "" || resume.length < 1) {
      client === ""
        ? alert("Digite o nome do cliente.")
        : alert("Não há produtos selecionados.");
    } else {
      postOrders(userId, client, resume, currentDateTime).then(() => {
        setResume([]);
        openModal();
        clientName.current.value = "";
        updateOrders();
      });
    }
  }

  return (
    <Container backgroundColor="#451E12">
      <H1>RESUMO DO PEDIDO</H1>
      <Input
        placeholder="CLIENTE"
        type="text"
        class="client"
        ref={clientName}
      />

      <H3> Item / Valor R$ / Qtd </H3>
      <ContainerItem>
        {resume.length === 0 ? (
          <>
            <SadBurgerIcon src={SadBurger} /> <H3>Sem pedidos no momento!</H3>
          </>
        ) : ( 
          resume.map((product) => (
            <DivItem key={product.product.id}>
              <InfoItem className="styleName">{product.product.name}</InfoItem>
              <InfoItem className="stylePrice">
                {parseFloat(product.product.price).toFixed(2)}
              </InfoItem>
              <InfoItem>
                <DivQtd>
                  <BtnQtd onClick={() => changeQtdItem("decrease", product)}>
                    <i className="bi bi-dash-square-fill"></i>
                  </BtnQtd>
                  <Quantity> {product.qty} </Quantity>
                  <BtnQtd onClick={() => changeQtdItem("increase", product)}>
                    <i className="bi bi-plus-square-fill"></i>
                  </BtnQtd>
                </DivQtd>
              </InfoItem>
              <Button onClick={() => deleteItem(product)} id="trash">
                <i className="bi bi-trash3"></i>
              </Button>
            </DivItem>
          ))
        )}
      </ContainerItem>
      <Total>Total: R$ {sumPrice}</Total>
      <Button onClick={sendOrder} id="orderResume">
        ENVIAR PARA PREPARO
      </Button>
      <ModalEx
        textH2="Pedido enviado para a cozinha!"
        src={checkIcon}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Button id="orderResume" onClick={backToHomeScreen}>
        VOLTAR
      </Button>
    </Container>
  );
};

export default OrderResume;
