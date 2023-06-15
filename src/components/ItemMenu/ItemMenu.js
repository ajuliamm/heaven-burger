import React from "react";
import { BtnItem, ValueItem } from "./Styles";


const ItemMenu = (props) => {
    // const formattedPrice = parseFloat(props.price).toFixed(2);

    return (
        <BtnItem onClick={props.onClick}>
            <ValueItem >{props.name}</ValueItem>
            <ValueItem>{parseFloat(props.price).toFixed(2)}</ValueItem>
        </BtnItem>
    )
}
export default ItemMenu; 