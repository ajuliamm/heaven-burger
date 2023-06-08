import React, { useEffect, useState } from "react";
import { Container, Main, SectionCards, SectionImg, Image, H1 } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";
import CardOrder from "../../components/CardOrder/CardOrder";
import { getOrders } from "../../API/Orders";
import HandBurger from "../../img/burgerHandTwo.png";

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
                 <SectionCards>
                  <H1>PEDIDOS EM ESPERA</H1>
                    {allOrders.map((order)=>(
                      <CardOrder order={order} />
                    ))}
                </SectionCards>
                <SectionImg>
                  <Image src={HandBurger} />
                </SectionImg>
                
                  
                
                
            </Main>
        </Container>
    )
}

export default BackOrders;