import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { updateStatusOrder, updateDeliveredOrder } from "../../API/Orders";
import checkIcon from "../../img/icon_check.png";
import ModalEx from '../Modal/Modal';
import {
  ContainerCard,
  InfosOrder,
  ItemOrder,
  OrderList,
  Status,
  ButtonIcon,
  ButtonCheck,
} from "./Styles";
import "bootstrap-icons/font/bootstrap-icons.css";

const CardOrder = ({order}) => {
  const { user } = useContext(UserContext);
  const [deliver, setDeliver] = useState('notDelivered');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const finishedOrder = (orderId) => {
    // console.log(orderId);
    updateStatusOrder(orderId, "finished")
      .then((response) => response.json()) //converter a resposta em json
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
        throw error;
      });
      openModal()
      // setTimeout(navigate('/FinishedOrders'), 5000)
  };

  const convertDateFormat = (dateString) => {
    const [date, time] = dateString.split(", ");
    const [day, month, year] = date.split("/");
    const isoDate = `${year}-${month}-${day}T${time}`;

    return isoDate;
  };

  const calcTime = (entryTime, exitTime) => {
    const isoEntryTime = convertDateFormat(entryTime);
    const isoExitTime = convertDateFormat(exitTime);
    const calculateTime = new Date(isoExitTime) - new Date(isoEntryTime);
    const horas = Math.floor(calculateTime / (1000 * 60 * 60));
    const minutos = Math.floor(
      (calculateTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((calculateTime % (1000 * 60)) / 1000);
    const theElapsedTime = `${horas}h ${minutos}m ${segundos}s`;

    return theElapsedTime;
  };

  const checkOrderDelivered = (orderId) => {
    updateDeliveredOrder(orderId, 'delivered')
    setDeliver('delivered')
  };

  return (
    <ContainerCard>
      <InfosOrder className="client">N° DO PEDIDO: {order.id} </InfosOrder>
      <InfosOrder >CLIENTE: {order.client} </InfosOrder>
      <InfosOrder>
        {order.status === "pending"
          ? `ENTRADA: ${order.dataEntry}`
          : `TEMPO DE PREPARO: ${calcTime(order.dataEntry, order.dataExit)}`}
      </InfosOrder>
      <OrderList>
        {order.products.map((product) => (
          <ItemOrder>
            {product.qty} - {product.product.name}{" "}
          </ItemOrder>
        ))}
      </OrderList>
      <Status className={`${user.role} ${order.status}`}>
        <InfosOrder>
          {order.status === "pending" ? "AGUARDANDO" : "CONCLUÍDO"}
        </InfosOrder>
      </Status>
      <ButtonIcon
        className={`${user.role} ${order.status}`}
        onClick={() => finishedOrder(order.id)}
      >
        <i className="bi bi-check2-circle"></i>
      </ButtonIcon>
      <ModalEx textH2='Pedido finalizado e pronto para ser entregue!' src={checkIcon} showModal={showModal} setShowModal={setShowModal}/>

      <ButtonCheck
        className={`${user.role} ${order.status}`}
        onClick={() => checkOrderDelivered(order.id)}
      >
        
        {order.delivered === 'delivered' || deliver ==='delivered'
        ? (<><i class="bi bi-check-circle-fill"></i> <InfosOrder className="infoCheck">PEDIDO ENTREGUE</InfosOrder></>)
        :(<><i className="bi bi-check-circle"></i> <InfosOrder className="infoCheck">ENTREGAR PEDIDO?</InfosOrder></>)
        

        }
        
      </ButtonCheck>
    </ContainerCard>
  );
};

export default CardOrder;

