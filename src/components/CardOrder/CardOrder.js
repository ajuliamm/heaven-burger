import React from "react";
import { ContainerCard, InfosOrder, ItemOrder, OrderList, Status } from "./Styles";

const CardOrder = ({order}) => {
    console.log(order)

    return (
        <ContainerCard>
            <InfosOrder>CLIENTE: {order.client} </InfosOrder>
            <InfosOrder>ENTRADA: {order.dataEntry} </InfosOrder>
            <OrderList>
                {order.products.map((product)=>(
                    <ItemOrder> {product.qty} - {product.product.name} </ItemOrder>
                ))}
                
                
            </OrderList>
            <InfosOrder>TOTAL: 52,50 </InfosOrder>
            <Status>
            <InfosOrder>AGUARDANDO </InfosOrder>
            </Status>
        </ContainerCard>
    )
}

export default CardOrder;