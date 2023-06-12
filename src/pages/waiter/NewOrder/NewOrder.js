import React, { useState, useContext } from "react";
import { Container, Main } from "./Style";
import Menu from '../../../components/Menu/Menu';
import OrderResume from '../../../components/OrderResume/OrderResume';
import Navbar from "../../../components/Navbar/Navbar";
import UserContext from "../../../contexts/UserContext";

const NewOrder = () => {
    const [listOrder, setListOrder] = useState([]);
    const [resume, setResume] = useState([]);
    
    const { user } = useContext(UserContext) 
    return (
        <Container backgroundColor='#451E12'>
            <Navbar role={user.role}/>
            <Main>
                <Menu setListOrder={setListOrder} listOrder={listOrder} setResume={setResume} resume ={resume}/>
                <OrderResume listOrder={listOrder} setListOrder={setListOrder} setResume={setResume} resume={resume}/>
            </Main>
            
        </Container>
        
    )
}
export default NewOrder; 