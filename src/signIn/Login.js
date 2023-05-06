import React from 'react';
import { useNavigate } from 'react-router-dom'
import { 
    H1, 
    Form,
    Input, 
    Button, 
    MessageError, 
    Container } from './Style.js';
import LogoOrange from '../img/LogoOrange.svg';


export default function Login() {
    
    const navigate = useNavigate()

    function changeToHomeScreen () {
        navigate('/')
    }
   return( 
   <Container 
   backgroundColor ='#451e12'>
        <img width={400} src={LogoOrange}/>
        <H1 color='#E48B26'>
            LOGIN
        </H1>
        <Form>
            <Input 
            backgroundColor = '#C18050'
            placeholder='Email'
            type='email'
            color='#451E12'/>

            <MessageError
            color='#E48B26'>
                Email inválido
            </MessageError>
            <Input 
            color='#451e12'
            placeholder='Senha' 
            type='password' 
            backgroundColor = '#C18050'/>
            <MessageError
            color='#E48B26'>
                Senha incorreta
            </MessageError>
            <Button 
            color='#E48B26'
            backgroundColor = 'rgb(176, 136, 90, 17%)'> 
                ENTRAR
            </Button>
            <Button 
            onClick={changeToHomeScreen}
            color='#E48B26'
            backgroundColor = 'rgb(176, 136, 90, 17%)'> 
                VOLTAR
            </Button>
        </Form>
    </Container>
   )
}