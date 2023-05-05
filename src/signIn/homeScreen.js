import React from "react";
import { 
    Button, 
    DivFlex,
    Container } from './Style.js';
import LogoBurger from '../img/LogoBurger.svg'

export default function HomeScreen () {
    return (
        <Container
        backgroundColor='#E99331'>
            
            <img 
            src={LogoBurger}/>
            <DivFlex>
                <Button
                backgroundColor='rgb(69,30,18,17%)'
                color='#451E12'>
                    ENTRAR
                </Button>
                <Button
                backgroundColor='rgb(69,30,18,17%)'
                color='#451E12'>
                    CADASTRAR
                </Button>
            </DivFlex>
           
        </Container>
    )
}