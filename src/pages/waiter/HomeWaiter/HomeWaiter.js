import React from 'react';
import ImageLogo from '../../../components/ImageLogo/ImageLogo.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '../../../components/Navbar/Navbar.js';
import Footer from '../../../components/Footer/Footer.js';
import LogoBurger from '../../../img/LogoBurger.svg';
import { Container, Main } from './Style.js';
import HandBurger from '../../../img/handBurger.svg';


const HomeWaiter = () => {
    return (
        <Container backgroundColor='#E99331'>
            <Navbar role='waiter'/>                       
            <Main>
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeMobile' src={LogoBurger}/>    
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeDesktop' src={HandBurger}/>
            </Main>
                
            <Footer/>
        </Container>  
    )
}

export default HomeWaiter;