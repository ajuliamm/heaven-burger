import React, { useState, useEffect } from "react";
import { Container, H1, Main } from "./Styles";
import CardCollaborator from "../../../components/CardCollaborators/CardCollaborators";
import NavbarAdm from "../../../components/Navbar/NavbarAdm";
import { listUsers } from "../../../API/Users";

const Collaborators = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await listUsers();
      const json = await response.json();
      setAllUsers(json);
    };

    fetchUsers();
  }, []);

  
  return (
    <Container>
      <NavbarAdm/>
      <Main>
        <H1>COLABORADORES</H1>
        {allUsers.map((eachUser) => (
          <CardCollaborator eachUser={eachUser} key={eachUser.id} />
        ))}
      </Main>
    </Container>
  );
};

export default Collaborators;
