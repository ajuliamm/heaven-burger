import React from "react";
import { Container, Header, Nav, Button, Main, Image, Footer, Paragrafo } from "./Style.js";
import 'bootstrap-icons/font/bootstrap-icons.css'


import LogoBurger from '../img/LogoBurger.svg'
export default function HomeWaiter(){
    return (
    <Container backgroundColor='#E99331'>
        <Header>
            <Nav>         
                <Button>
                    <i className="bi bi-plus-circle"></i>
                </Button>
                <Button>
                    <i className="bi bi-stopwatch"></i>
                </Button>
                <Button>
                    <i className="bi bi-check2-circle"></i>
                </Button>
                <Button>
                    <i className="bi bi-box-arrow-left"></i>
                </Button>
                
            </Nav> 
        </Header>
        <Main>
            <Image alt='logo-heaven-burger' src={LogoBurger}/>
        </Main>
        <Image></Image>
        
        <Footer>
            <Paragrafo>
                Desenvolvido por: 
            </Paragrafo>
            <Paragrafo>
                Ana Leticia B. Prince e Angelina Melo
            </Paragrafo>
        </Footer>

    </Container>  
    )
}