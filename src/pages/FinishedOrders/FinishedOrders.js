import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import { getOrders } from "../../API/Orders";
import SadBurger from "../../img/SadBurger.png";
import HandBurger from "../../img/burgerHandTwo.png";
import UserContext from "../../contexts/UserContext";

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

  const [allOrdersFinished, setAllOrdersFinished] = useState([]);
  const { user } = useContext(UserContext);
  //   const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getOrders();
        console.log(response);
        const json = await response.json();

        if (Array.isArray(json)) {
          const filterOrder = json.filter(
            (order) => order.status === "finished"
          );
          console.log(filterOrder);
          setAllOrdersFinished(filterOrder);
        } else {
          console.log(json);
          //   setError(
          //     "Ops! Tivemos um problema, atualize a página e tente novamente."
          //   );
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
      </Main>
    </Container>
  );
};

export default FinishedOrders;
