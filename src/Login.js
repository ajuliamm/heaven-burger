import React from 'react';
import { 
    H1, 
    Form,
    Input, 
    Button, 
    MessageError, 
    Container } from './Style.js';
import LogoOrange from '../img/LogoOrange.svg'

export default function Login() {
   return( 
   <Container>
        <img 
        width={400}
        src={LogoOrange}/>
        <H1>LOGIN</H1>
        <Form>
            <Input
            placeholder='Email'
            type='text'
            />
            <MessageError>
                Email inválido
            </MessageError>
            <Input
            placeholder='Senha'
            type='password'
            />
            <MessageError>
                Senha incorreta
            </MessageError>
            <Button> 
                ENTRAR
            </Button>
        </Form>
    </Container>
   )
}