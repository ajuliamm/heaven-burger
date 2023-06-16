import React, { useEffect, useState } from "react";
import CardProducts from "../../../components/CardProducts/CardProducts";
import { Container, Main, H1 } from "./Styles";
import Navbar from "../../../components/Navbar/NavbarAdm";
import IconClose from "../../../img/IconClose.svg";
import ModalEx from "../../../components/Modal/Modal";


import { getProducts } from "../../../API/Products";

export const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };

    useEffect(() => {
        const gettingProducts = async () => {
            const response = await getProducts();
            const data = await response.json()

            if(Array.isArray(data)){ 
                setAllProducts(data) 
            } else{
                setError(
                    "Ops! Tivemos um problema, atualize a página e tente novamente."
                )
                openModal();
            }

        }
        gettingProducts()
    },[])
    return(
        <Container>
            <Navbar/>
            <Main>
                <H1>PRODUTOS</H1>
                {allProducts.map(product=>(
                    <CardProducts product={product}/>
                ))
                }
            </Main>
            <ModalEx
            textH2={error}
            src={IconClose}
            showModal={showModal}
            setShowModal={setShowModal}
            />
        </Container>
    )
} 
export default Products;