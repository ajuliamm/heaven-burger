import React, { useEffect, useState }from "react";
import { Container, Main, SectionCards, H3, SadBurgerIcon } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import { getOrders } from "../../API/Orders";
import SadBurger from "../../img/SadBurger.png";

const FinishedOrders = () => {
  const [allOrdersFinished, setAllOrdersFinished] = useState([]);
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
      <Navbar />
      <Main>
        <SectionCards>
          <h1>PEDIDOS FINALIZADOS</h1>
          {allOrdersFinished.length === 0 ? (
            <>
              <SadBurgerIcon src={SadBurger} /> <H3> Sem pedidos prontos por aqui!</H3>
            </>
          ) : (
            allOrdersFinished.map((order) => (
              <CardOrder order={order} key={order.id} />
            ))
          )}
        </SectionCards>
      </Main>
    </Container>
  );
};

export default FinishedOrders;
