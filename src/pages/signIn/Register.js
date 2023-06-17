import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../../components/ImageLogo/ImageLogo';
import LogoBrown from '../../img/Brown2.png';
import FormRegister from '../../components/FormRegister/FormRegister';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    min-height: 100vh;  
`;

const Register = () => {
    
    return (
        <Container backgroundColor= '#E99331'>
            <ImageLogo src={LogoBrown}/>
            <FormRegister text='CADASTRO COLABORADOR'  class='register' classSelect='active' textButton='CADASTRAR'/>
        </Container>
    )
}

export default Register;
