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
import Button from "../../components/Button/Button";
import IconClose from "../../img/IconClose.svg";
import { getOrders } from "../../API/Orders";
import HandBurger from "../../img/burgerHandTwo.png";
import ModalEx from "../../components/Modal/Modal";
import UserContext from "../../contexts/UserContext";
import SadBurger from "../../img/SadBurger.png";

const BackOrders = () => {
  const { user } = useContext(UserContext);

  const [allOrdersPending, setAllOrdersPending] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getOrders();
        console.log(response);
        const json = await response.json();
      
        if (Array.isArray(json)) {
          const filterOrder = json.filter(order=>order.status === 'pending')
          console.log(filterOrder)
          setAllOrdersPending(filterOrder);
        
        } else {
          console.log(json);
          setError(
            "Ops! Tivemos um problema, atualize a página e tente novamente."
          );
          openModal();
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
            allOrdersPending.map((order) => <CardOrder order={order} key={order.id} />)
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
