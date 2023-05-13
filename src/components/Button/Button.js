import React from "react";
import { StyledButton } from "./Styles";


const Button = (props) => {
    

   console.log(props)
    return (
        <StyledButton className={props.id} onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}
export default Button;