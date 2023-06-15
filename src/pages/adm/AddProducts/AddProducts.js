import React from "react";
import { Container } from "./Styles";
import ImageLogo from '../../../components/ImageLogo/ImageLogo';
import LogoBrown from '../../..//img/Brown2.png';
import FormRegisterProducts from "../../../components/FormRegisterProducts/FormRegisterProducts";

const AddProducts = () => {


    return (
        <Container>
             <ImageLogo src={LogoBrown}/>
            <FormRegisterProducts />
        </Container>
    )
}

export default AddProducts;