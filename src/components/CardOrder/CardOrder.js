import React from "react";
import { ContainerCard, InfosOrder, ItemOrder, OrderList, Status } from "./Styles";

const CardOrder = () => {

    return (
        <ContainerCard>
            <InfosOrder>CLIENTE: ANA </InfosOrder>
            <InfosOrder>ENTRADA: 07/06/2023, 09:52. </InfosOrder>
            <OrderList>
                <ItemOrder> 1 - HAMBURGUER VEGANO S/ MOLHO </ItemOrder>
                <ItemOrder> 1 - SUCO DE MORANGO S/ GELO </ItemOrder>
            </OrderList>
            <InfosOrder>TOTAL: 52,50 </InfosOrder>
            <Status>
            <InfosOrder>AGUARDANDO </InfosOrder>
            </Status>
        </ContainerCard>
    )
}

export default CardOrder;