import React, { useEffect, useState } from "react";
import { Container, Main } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import { getOrders } from "../../API/Orders";

const BackOrders = () => {
    
    const [allOrders, setAllOrders ] = useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            try {
              const response = await getOrders();
              console.log(response)
              const json = await response.json();
              setAllOrders(json);
            } catch (error) {
              console.error(error);
            }
          }
          fetchData()
    },[])
    console.log(allOrders)

    return (
        <Container>
            <Navbar/>
            <Main>
                <h1>PEDIDOS EM ESPERA</h1>
                <CardOrder/>
            </Main>
        </Container>
    )
}

export default BackOrders;