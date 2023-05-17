import React from 'react';
import styled from 'styled-components';
import LogoOrange from '../../img/Orange2.png';
import FormLogin from '../../components/FormLogin/FormLogin';
import ImageLogo from '../../components/ImageLogo/ImageLogo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    min-height: 100vh;  
`;

export default function Login() {

   return ( 
        <Container backgroundColor ='#451e12'>
                <ImageLogo src={LogoOrange}/>
                <FormLogin class='login' classSelect='hidden' />
        </Container>
   )
}