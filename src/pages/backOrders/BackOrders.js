import React from "react";
import { Container, Main } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";

const BackOrders = () => {

    return (
        <Container>
            <Navbar/>
            <Main>
                <h1>PEDIDOS EM ESPERA</h1>
            </Main>
        </Container>
    )
}

export default BackOrders;