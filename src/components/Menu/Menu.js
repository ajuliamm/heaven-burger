import React from "react";
import { Container, DivFlex, H1 } from "./Styles";
import Button from '../../components/Button/Button';
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import { getProducts } from "../../API/Products";


const Menu = () => {
    const openMenu = async () => {
        try {
            const response = await getProducts();
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Container>
               <H1>NOVO PEDIDO</H1>
            <DivFlex>
                <Button onClick={openMenu} id='btnMenu'>CAFÉ DA MANHÃ</Button>
                <Button id='btnMenu'>APERITIVOS</Button>
                <Button id='btnMenu'>HAMBURGUERS</Button>
                <Button id='btnMenu'>BEBIDAS</Button>
            </DivFlex>
            <ItemMenu/>
            <ItemMenu/>
        </Container>
    )
}

export default Menu;

