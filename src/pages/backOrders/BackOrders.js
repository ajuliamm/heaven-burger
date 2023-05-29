import React from "react";
import { Container } from "./Styles";
import Navbar from "../../components/Navbar/Navbar";

const BackOrders = () => {

    return (
        <Container>
            <Navbar/>
            <h1>PEDIDOS EM ESPERA</h1>
        </Container>
    )
}

export default BackOrders;