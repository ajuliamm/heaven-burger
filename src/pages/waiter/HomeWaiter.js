import React from "react";
import { Container, Header, Main, Image} from "./Style.js";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.js";
import LogoBurger from '../../img/LogoBurger.svg'

export default function HomeWaiter(){
    return (
    <Container backgroundColor='#E99331'>
        <Header>
            <Navbar/>                       
        </Header>
        <Main>
            <Image alt='logo-heaven-burger' src={LogoBurger}/>
        </Main>
               
        <Footer/>
           

    </Container>  
    )
}