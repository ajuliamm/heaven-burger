import React from "react";
import CardProducts from "../../../components/CardProducts/CardProducts";
import { Container, Main, H1 } from "./Styles";
import Navbar from "../../../components/Navbar/NavbarAdm";

export const Products = () => {
    return(
        <Container>
            <Navbar/>
            <Main>
                <H1>PRODUTOS</H1>
                <CardProducts/>
            </Main>
        </Container>
    )
} 
export default Products;