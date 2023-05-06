import React from 'react';
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

export default function Register() {

    const navigate = useNavigate();

    function changeToHomeScreen(){
        navigate('/');
    }

    return (   
    <Container backgroundColor = '#E99331'>
        <img width={400} src={LogoBrown}/>
        <H1 color='#64300F'>
            CADASTRAR
        </H1>
        <Form>
            <Input 
                backgroundColor = '#451E12'
                placeholder='Email'
                type='text'
                color='#E8B25A'
                opacity='0.6'/>
            <Input 
                backgroundColor = '#451E12'
                color='#E8B25A'
                placeholder='Senha' 
                type='password'
                opacity='0.6'/>
            <div>
                <TextRegister color='#3E180C'>
                    Qual é o seu time?
                </TextRegister>
                <Select
                    color='#E8B25A'>
                        <option hidden>...</option>
                        <option>Atendente</option>
                        <option>Chefe de Cozinha</option>
                </Select>  
            </div>
            <Button
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

