import React from "react";
import { H1, Container, DivItem, ContainerItem, InfoItem, DivQtd, H3, BtnQtd, Quantity, Total } from "./Styles";
import Input from '../Input/Input'
import Button from '../Button/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';


const OrderResume = () => {
    return (
        <Container backgroundColor='#451E12 '>

            <H1>RESUMO DO PEDIDO</H1>
            <Input placeholder='CLIENTE' type='text' class='client'/>
            
            <H3> Item / Valor / Qtd</H3>
            <ContainerItem>
                <DivItem>
                    <InfoItem>Hamburguer Simples</InfoItem>
                    <InfoItem>10,00</InfoItem>
                    <InfoItem>
                    <DivQtd>
                        <BtnQtd><i class="bi bi-dash-square-fill"></i></BtnQtd>
                            <Quantity> 1 </Quantity>
                        <BtnQtd><i class="bi bi-plus-square-fill"></i></BtnQtd>
                    </DivQtd>
                    </InfoItem>
                    <Button id='trash'><i class="bi bi-trash3"></i></Button>

                </DivItem>
                <DivItem>
                    <InfoItem>Hamburguer Duplo</InfoItem>
                    <InfoItem>20,00</InfoItem>
                    <InfoItem>
                    <DivQtd>
                        <BtnQtd><i class="bi bi-dash-square-fill"></i></BtnQtd>
                            <Quantity> 1 </Quantity>
                        <BtnQtd><i class="bi bi-plus-square-fill"></i></BtnQtd>
                    </DivQtd>
                    </InfoItem>
                    <Button id='trash'><i class="bi bi-trash3"></i></Button>
                </DivItem>
            </ContainerItem>
            <Total>Total:</Total>
            <Button id='orderResume'>ENVIAR PARA PREPARO</Button>
        </Container>
    )
}
export default OrderResume;