import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Container, Main, SectionCards, SectionImg, Image, H1, ImgIcon } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import Button from "../../components/Button/Button";
import IconClose from '../../img/IconClose.svg'
import { getOrders } from "../../API/Orders";
import HandBurger from "../../img/burgerHandTwo.png";

const BackOrders = () => {

  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal enviar pedido'
          style={{
            overlay: {

              position: 'absolute',
              top: 'calc(50vh - 150px)',
              left: 'calc(50vw - 190px)',
              backgroundColor: '#E48B26',
              width: '380px',
              height: '300px',
              borderRadius: '10px',

            },
            content: {
              fontSize: '10px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: 'column',
              gap: '30px',
              border: '1px solid',
              background: 'rgb(69,30,18,80%)',
              borderRadius: '15px',
              color: '#E99331'

            }
          }}>
          <ImgIcon src={IconClose} />
          <h2>{error}</h2>
          <Button id='buttonModal' onClick={closeModal}>OK</Button>
        </Modal>



      </Main>
    </Container>
  )
}

export default BackOrders;