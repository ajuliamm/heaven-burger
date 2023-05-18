import React from 'react';
import ImageLogo from '../../components/ImageLogo/ImageLogo.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer.js';
import LogoBurger from '../../img/LogoBurger.svg'
import { Container, Main } from './Style.js';


export default function HomeWaiter(){
    return (
    <Container backgroundColor='#E99331'>
        <Navbar/>                       
        <Main>
            <ImageLogo alt='logo-heaven-burger' src={LogoBurger}/>
        </Main>
               
        <Footer/>
    </Container>  
    )
}