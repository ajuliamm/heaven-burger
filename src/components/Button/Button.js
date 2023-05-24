import React from "react";
import { StyledButton } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Button = (props) => {
    return (
        <StyledButton className={props.id} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}
export default Button;