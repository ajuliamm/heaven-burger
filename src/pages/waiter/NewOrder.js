import React, { useState } from "react";
import { Container } from "./Style";
import Menu from '../../components/Menu/Menu';
import OrderResume from '../../components/OrderResume/OrderResume';
import Navbar from "../../components/Navbar/Navbar";

const NewOrder = () => {
    const [listOrder, setListOrder] = useState([]);
    const [resume, setResume] = useState([]);
    return (
        <Container backgroundColor='#7B451C'>
            <Navbar/>
            <Menu setListOrder={setListOrder} listOrder={listOrder} setResume={setResume} resume ={resume}/>
            <OrderResume listOrder={listOrder} resume={resume}/>
        </Container>
        
    )
}
export default NewOrder; 