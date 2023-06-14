import React, { useState } from "react";
import CardProducts from "../../../components/CardProducts/CardProducts";
import { Container, Main, H1 } from "./Styles";
import Navbar from "../../../components/Navbar/NavbarAdm";
import { getProducts } from "../../../API/Products";

export const Products = () => {
    const [allProducts, setAllProducts] = useState()
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