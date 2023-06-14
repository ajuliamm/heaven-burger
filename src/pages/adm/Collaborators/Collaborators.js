import React from "react";
import { Container, H1, Main } from "./Styles";
import CardCollaborator from "../../../components/CardCollaborators/CardCollaborators";
import NavbarAdm from "../../../components/Navbar/NavbarAdm";

const Collaborators = () => {
  return (
    <Container>
      <NavbarAdm />
      <Main>
        <H1>COLABORADORES</H1>
        <CardCollaborator></CardCollaborator>
      </Main>
    </Container>
  );
};

export default Collaborators;
