import React  from "react";
import { ContainerCard, InfosOrder, DivButton } from "./Styles";
import Button from "../Button/Button";
import { alterUser, deleteUser } from "../../API/Users";

const CardCollaborator = ({eachUser}) => {
    
    return (
        <ContainerCard>
            <InfosOrder> ID: {eachUser.id} </InfosOrder>
            <InfosOrder> CARGO: {eachUser.role} </InfosOrder>
            <InfosOrder> EMAIL: {eachUser.email} </InfosOrder>
            <DivButton>
                <Button id='cardCollaborator delete' onClick={() => deleteUser(eachUser.id)}>EXCLUIR</Button>
                <Button id='cardCollaborator change'onClick={() => alterUser}>ALTERAR</Button>
            </DivButton>
        </ContainerCard>
    )
}

export default CardCollaborator;