import React from "react";
import { BtnItem, ValueItem } from "./Styles";


const ItemMenu = (props) => {

    return (
        <BtnItem onClick={props.onClick}>
            <ValueItem >{props.name}</ValueItem>
            <ValueItem>{props.price.toFixed(2)}</ValueItem>
            
        </BtnItem>
    )
}
export default ItemMenu; 