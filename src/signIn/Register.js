import React from "react";

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
                        <option disabled selected hidden>...</option>
                        <option>Atendente</option>
                        <option>Chefe de Cozinha</option>
                </Select>  
            </div>
            <Button
            color='#E8B25A'
            backgroundColor = '#7B451C'> 
                CADASTRAR
            </Button>
        </Form>
    </Container>
    )
}

