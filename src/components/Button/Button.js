import React from "react";
import { StyledButton } from "./Styles";

const Button = (props) => {
    
   //console.log(props)
    return (
        <StyledButton className={props.id} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}
export default Button;