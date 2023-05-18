import React from "react";
import { H1,Container, } from "./Styles";
import Input from '../Input/Input'
import Button from '../Button/Button';

const OrderResume = () => {
    return (
        <Container backgroundColor='#451E12 '>

            <H1>RESUMO DO PEDIDO</H1>
            <Input placeholder='CLIENTE' type='text' class='client'/>
            
            <Button id='orderResume'>ENVIAR PARA PREPARO</Button>
        </Container>
    )
}
export default OrderResume;