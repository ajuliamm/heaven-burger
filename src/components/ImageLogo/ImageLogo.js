import React from "react";
import { StyledImage } from "./Styles";

const ImageLogo = (props) => {
    return(
        <StyledImage className={props.logoDesktop} alt='Logo heaven bueguer' src={props.src} />
    )
}

export default ImageLogo; 