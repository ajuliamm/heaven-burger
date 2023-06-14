import React  from "react";
import { ContainerCard, InfosOrder, DivButton } from "./Styles";
import Button from "../Button/Button";

const CardCollaborator = () => {

    return (
        <ContainerCard>
            <InfosOrder> NOME: </InfosOrder>
            <InfosOrder> CARGO: </InfosOrder>
            <InfosOrder> ADMISSÃO: </InfosOrder>
            <DivButton>
                <Button id='cardCollaborator delete'>EXCLUIR</Button>
                <Button id='cardCollaborator change'>ALTERAR</Button>
            </DivButton>
        </ContainerCard>
    )
}

export default CardCollaborator;