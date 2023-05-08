import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    H1,
    Form,
    Input,
    Button,
    Select,
    TextRegister,
    Container } from './Style.js';
import LogoBrown from '../img/LogoBrown.svg';
import { postRegister } from '../API/Users.js';

export default function Register() {

    const navigate = useNavigate();

    function changeToHomeScreen(){
        navigate('/');
    }

    const email = useRef();
    const password = useRef();
    const team = useRef();

    function btnRegister(event){

        event.preventDefault()
        postRegister(email.current.value, password.current.value, team.current.value)
    }

    return (   
    <Container backgroundColor = '#E99331'>
        <img width={400} src={LogoBrown}/>
        <H1 color='#64300F'>
            CADASTRAR
        </H1>
        <Form>
            <Input ref={email}
                backgroundColor = '#451E12'
                placeholder='Email'
                type='text'
                color='#E8B25A'
                opacity='0.6'/>
            <Input ref={password}
                backgroundColor = '#451E12'
                color='#E8B25A'
                placeholder='Senha' 
                type='password'
                opacity='0.6'/>
            <div>
                <TextRegister color='#3E180C'>
                    Qual é o seu time?
                </TextRegister>
                <Select ref={team}
                    color='#E8B25A'>
                        <option hidden>...</option>
                        <option value='waiter'>Atendente</option>
                        <option value='chef'>Chefe de Cozinha</option>
                        <option value='admin'>Administrador</option>
                </Select>  
            </div>
            <Button onClick={btnRegister}
            color='#3E180C'
            backgroundColor = 'rgb(69, 30, 18, 30%)'> 
                CADASTRAR
            </Button>
            <Button 
            onClick={changeToHomeScreen}
            color='#3E180C'
            backgroundColor = 'rgb(69, 30, 18, 30%)'> 
                VOLTAR
            </Button>
        </Form>
    </Container>
    )
}

