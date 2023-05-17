import React from 'react';
import styled from 'styled-components';
import LogoBurger from '../../img/LogoBurger.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/ImageLogo/ImageLogo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    min-height: 100vh;  
    gap: 10px;
`;

export default function HomeScreen() {
    const navigate = useNavigate();

    function changeToLogin(){
        navigate('/Login');
    }
    
    function changeToRegister(){
        console.log('deu bom')
        navigate('/Register');
    }
    return (
        <Container backgroundColor='#E99331'>
            <ImageLogo src={LogoBurger}/>
            <Button onClick={changeToLogin} backgroundColor='rgb(69,30,18,17%)' color='#451E12'>ENTRAR</Button>   
            <Button onClick={changeToRegister}>CADASTRAR</Button>
         </Container>
    )
}