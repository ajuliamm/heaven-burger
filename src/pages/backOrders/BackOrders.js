import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Main,
  SectionCards,
  SectionImg,
  Image,
  H1,
  H3,
  SadBurgerIcon,
} from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import IconClose from "../../img/IconClose.svg";
import HandBurger from "../../img/burgerHandTwo.png";
import ModalEx from "../../components/Modal/Modal";
import UserContext from "../../contexts/UserContext";
import OrdersContext from "../../contexts/OrdersContext";
import SadBurger from "../../img/SadBurger.png";

const BackOrders = () => {
  const { user } = useContext(UserContext);
  const { orders } = useContext(OrdersContext);

  const [allOrdersPending, setAllOrdersPending] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
         if (Array.isArray(orders)) {
          const filterOrder = orders.filter(
            (order) => order.status === "pending"
          );
          setAllOrdersPending(filterOrder);
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
          <H1>PEDIDOS EM ESPERA</H1>
          {allOrdersPending.length === 0 ? (
            <>
              <SadBurgerIcon src={SadBurger} /> <H3>Sem pedidos no momento!</H3>
            </>
          ) : (
            allOrdersPending.map((order) => (
              <CardOrder order={order} key={order.id} />
            ))
          )}
        </SectionCards>
        <SectionImg>
          <Image src={HandBurger} />
        </SectionImg>
        <ModalEx
          textH2={error}
          src={IconClose}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Main>
    </Container>
  );
};

export default BackOrders;
