import React from "react";
import { StyledImage } from "./Styles";

const ImageLogo = (props) => {
    console.log(props)
    return(
        <StyledImage alt='Logo heaven bueguer' src={props.src} />
    )
}

export default ImageLogo; 