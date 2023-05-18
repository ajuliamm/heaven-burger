import React from "react";
import { Container } from "./Style";
import Menu from '../../components/Menu/Menu';
import OrderResume from '../../components/OrderResume/OrderResume';
import Navbar from "../../components/Navbar/Navbar";

const NewOrder = () => {

    return (
        <Container backgroundColor='#7B451C'>
            <Navbar/>
            <Menu/>
            <OrderResume/>
        </Container>
    )
}
export default NewOrder; 