import React from "react";
import { Container, Infos, Div, Button } from './Styles';

const CardProducts = () => {
    return (
        <Container>
            <Div/>
            <Infos>NOME: Pudim</Infos>
            <Infos>PREÇO: 10,00</Infos>
            <Infos>TIPO: Sobremesa</Infos>
            <Div className="buttons">
                <Button className="delete">EXCLUIR</Button>
                <Button className="edit">ALTERAR</Button>
            </Div>
        </Container>
    )
}

export default CardProducts;