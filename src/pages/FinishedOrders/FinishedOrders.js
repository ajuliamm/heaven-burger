import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import SadBurger from "../../img/SadBurger.png";
import HandBurger from "../../img/burgerHandTwo.png";
import UserContext from "../../contexts/UserContext";
import Modal from "../../components/Modal/Modal";
import IconClose from "../../img/IconClose.svg";
import OrdersContext from "../../contexts/OrdersContext";

import {
  Container,
  Main,
  H1,
  SectionCards,
  H3,
  Image,
  SadBurgerIcon,
  SectionImg,
} from "./Styles";

const FinishedOrders = () => {

  const { orders } = useContext(OrdersContext);

  const [allOrdersFinished, setAllOrdersFinished] = useState([]);
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (Array.isArray(orders)) {
          const filterOrder = orders.filter((order) => order.status === "finished");
          setAllOrdersFinished(filterOrder);
        } else {
          setError("Ops! Tivemos um problema, atualize a página e tente novamente.");
          openModal();
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [orders]);

  return (
    <Container>
      <Navbar role={user.role} />
      <Main>
        <SectionCards>
          <H1>PEDIDOS FINALIZADOS</H1>
          {allOrdersFinished.length === 0 ? (
            <>
              <SadBurgerIcon src={SadBurger} />{" "}
              <H3> Sem pedidos prontos por aqui!</H3>
            </>
          ) : (
            allOrdersFinished.map((order) => (
              <CardOrder order={order} key={order.id}   
              />
            ))
          )}
        </SectionCards>
        <SectionImg>
          <Image src={HandBurger} />
        </SectionImg>
        <Modal
          textH2={error}
          src={IconClose}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Main>
    </Container>
  );
};

export default FinishedOrders;
