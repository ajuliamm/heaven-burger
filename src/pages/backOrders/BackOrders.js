import React, { useEffect, useState } from "react";
import { Container, Main, SectionCards, SectionImg, Image, H1, ImgIcon } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import Button from "../../components/Button/Button";
import IconClose from '../../img/IconClose.svg'
import { getOrders } from "../../API/Orders";
import HandBurger from "../../img/burgerHandTwo.png";
import ModalEx from "../../components/Modal/Modal"

const BackOrders = () => {

  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getOrders();
        console.log(response)
        const json = await response.json();

        if (Array.isArray(json)) {
          setAllOrders(json);;
        } else {
          console.log(json)
          setError('Ops! Tivemos um problema, atualize a página e tente novamente.');
          openModal();
        }

      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])
  console.log(allOrders)
  console.log(typeof allOrders)


  return (
    <Container>
      <Navbar />
      <Main>
        <SectionCards>
          <H1>PEDIDOS EM ESPERA</H1>
          {allOrders.map((order) => (
            <CardOrder order={order} key={order.id} />
          ))}
        </SectionCards>
        <SectionImg>
          <Image src={HandBurger} />
        </SectionImg>
        <ModalEx textH2={error} src={IconClose} showModal={showModal} setShowModal={setShowModal}/>
      </Main>
    </Container>
  )
}

export default BackOrders;