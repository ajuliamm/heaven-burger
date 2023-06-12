import React from 'react';
import { Container, Main } from './Styles';
import Footer from '../../../components/Footer/Footer.js';
import Navbar from '../../../components/Navbar/Navbar.js';
import LogoBurger from '../../../img/LogoBurger.svg';
import ChefBurger from '../../../img/ChefBurger.png';
import ImageLogo from '../../../components/ImageLogo/ImageLogo';

const HomeChef = () => {
    return(
        <Container backgroundColor='#E99331'>
            <Navbar role='chef'/>
            <Main>
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeMobile' src={LogoBurger}/>    
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeDesktop' src={ChefBurger}/>
            </Main>
            <Footer/>
        </Container>
    )
}

export default HomeChef;