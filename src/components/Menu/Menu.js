import React, { useState } from "react";
import { Container, DivFlex, H1, List } from "./Styles";
import Button from '../../components/Button/Button';
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import { getProducts } from "../../API/Products";


const Menu = () => {
    const [dataProducts, setDataProducts]=useState([]);
    
    const openMenu = async (optionMenu) => {
        try {
            const response = await getProducts();
            const json = await response.json();
            setDataProducts(json.filter(product=>product.type===optionMenu))
            console.log(json);
        } catch (error) {
            //console.error(error);
        }
    };

    const addProduct = (id) => {
        console.log('produto adicionado :D', id)
    }

    return (
        <Container>
               <H1>NOVO PEDIDO</H1>
            <DivFlex>
                <Button onClick={()=>openMenu('Desayuno')} id='btnMenu'>CAFÉ DA MANHÃ</Button>
                <Button onClick={()=>openMenu('Almuerzo')} id='btnMenu'>APERITIVOS</Button>
                <Button id='btnMenu'>HAMBURGUERS</Button>
                <Button id='btnMenu'>BEBIDAS</Button>
            </DivFlex>
            <List>
                {dataProducts.map(product=>(
                    <ItemMenu onClick={()=>addProduct(product.id)} name={product.name} price={product.price} key={product.id}/>
                    //console.log(product, product.name, product.price, product.id)
                ))
                }
            </List>
            
        </Container>
    )
}

export default Menu;

