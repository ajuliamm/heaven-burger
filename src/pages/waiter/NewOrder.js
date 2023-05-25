import React, { useState } from "react";
import { Container } from "./Style";
import Menu from '../../components/Menu/Menu';
import OrderResume from '../../components/OrderResume/OrderResume';
import Navbar from "../../components/Navbar/Navbar";

const NewOrder = () => {
    const [listOrder, setListOrder] = useState([]) 
    return (
        <Container backgroundColor='#7B451C'>
            <Navbar/>
            <Menu setListOrder={setListOrder} listOrder={listOrder}/>
            <OrderResume listOrder={listOrder}/>
        </Container>
        
    )
}
export default NewOrder; 