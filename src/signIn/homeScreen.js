import React from 'react';
import { 
    Button, 
    DivFlex,
    Container } from './Style.js';
import LogoBurger from '../img/LogoBurger.svg'
import { useNavigate } from 'react-router-dom'



export default function HomeScreen() {
    const navigate = useNavigate();

    function changeToLogin(){
        navigate('/Login');
    }
    
    function changeToRegister(){
        navigate('/Register');
    }
    return (
        <Container
        backgroundColor='#E99331'>
            <img src={LogoBurger}/>
            <DivFlex>
                <Button onClick={changeToLogin}
                backgroundColor='rgb(69,30,18,17%)'
                color='#451E12'>
                    ENTRAR
                </Button>
                <Button onClick={changeToRegister}
                backgroundColor='rgb(69,30,18,17%)'
                color='#451E12'>
                    CADASTRAR
                </Button>
            </DivFlex>
        </Container>
    )
}