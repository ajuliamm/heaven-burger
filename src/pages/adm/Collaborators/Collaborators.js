import React, { useState, useEffect } from "react";
import { Container, H1, Main } from "./Styles";
import CardCollaborator from "../../../components/CardCollaborators/CardCollaborators";
import NavbarAdm from "../../../components/Navbar/NavbarAdm";
import ModalEx from "../../../components/Modal/Modal";
import IconClose from "../../../img/IconClose.svg";
import { listUsers } from "../../../API/Users";

const Collaborators = () => {
  
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await listUsers();
      const json = await response.json();
      
      if(Array.isArray(json)){
        setAllUsers(json);
      }else{
        console.log(json);
        setError(
          "Ops! Tivemos um problema, atualize a página e tente novamente."
      )
      openModal();
      }
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
      <ModalEx
            textH2={error}
            src={IconClose}
            showModal={showModal}
            setShowModal={setShowModal}
            />
    </Container>
  );
};

export default Collaborators;
