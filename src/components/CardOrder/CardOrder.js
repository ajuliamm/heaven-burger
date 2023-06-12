import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { updateStatusOrder } from "../../API/Orders";
import {
  ContainerCard,
  InfosOrder,
  ItemOrder,
  OrderList,
  Status,
  ButtonIcon,
} from "./Styles";
import "bootstrap-icons/font/bootstrap-icons.css";

const CardOrder = ({ order }) => {
  const { user } = useContext(UserContext);
  const [elapsedTime, setElapsedTime] = useState("");

  const finishedOrder = (orderId) => {
    console.log(orderId);

    updateStatusOrder(orderId, "finished")
      .then((response) => response.json()) //converter a resposta em json
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const calcTime = (entryTime, exitTime) => {

    const calculateTime = new Date(exitTime) - new Date(entryTime);
    console.log(calculateTime, typeof calculateTime);
    const horas = Math.floor(calculateTime / (1000 * 60 * 60));
    const minutos = Math.floor((calculateTime % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((calculateTime % (1000 * 60)) / 1000);

    const theElapsedTime = `${horas}:${minutos}:${segundos}`;
    console.log(theElapsedTime)
    return theElapsedTime;
  };

  return (
    <ContainerCard>
      <InfosOrder className="client">CLIENTE: {order.client} </InfosOrder>
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
      <Status className={order.status}>
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
    </ContainerCard>
  );
};

export default CardOrder;
