import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BtnItem, ValueItem, BtnQtd, Quantity, DivQtd } from "./Styles";
import Button from "../Button/Button";


const ItemMenu = () => {

    return (
        <BtnItem>
            <ValueItem>Hamburguer Simples</ValueItem>
            <ValueItem>10,00</ValueItem>
            <DivQtd>
                <BtnQtd>-</BtnQtd>
                 <Quantity> 1 </Quantity>
                <BtnQtd>+</BtnQtd>
            </DivQtd>
            <Button id='hidden'><i class="bi bi-trash3"></i></Button>
        </BtnItem>
    )
}
export default ItemMenu; 