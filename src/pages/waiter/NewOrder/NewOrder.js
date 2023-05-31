import React, { useState } from "react";
import { Container, Main } from "./Style";
import Menu from '../../../components/Menu/Menu';
import OrderResume from '../../../components/OrderResume/OrderResume';
import Navbar from "../../../components/Navbar/Navbar";

const NewOrder = () => {
    const [listOrder, setListOrder] = useState([]);
    const [resume, setResume] = useState([]);
    return (
        <Container backgroundColor='#7B451C'>
            <Navbar/>
            <Main>
                <Menu setListOrder={setListOrder} listOrder={listOrder} setResume={setResume} resume ={resume}/>
                <OrderResume listOrder={listOrder} setListOrder={setListOrder} setResume={setResume} resume={resume}/>
            </Main>
            
        </Container>
        
    )
}
export default NewOrder; 