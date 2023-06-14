import React from "react";
import NavbarAdm from "../../../components/Navbar/NavbarAdm";
import Footer from '../../../components/Footer/Footer.js';
import LogoBurger from '../../../img/LogoBurger.svg';
import homeAdm from '../../../img/homeAdm.png';
import ImageLogo from '../../../components/ImageLogo/ImageLogo';
import { Container, Main } from './Styles';

const HomeAdm = () => {

    return(
        <Container backgroundColor='#E99331'>
            <NavbarAdm />
            <Main>
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeMobile' src={LogoBurger}/>    
                <ImageLogo alt='logo-heaven-burger' logoDesktop='HomeDesktop' src={homeAdm}/>
            </Main>
            <Footer/>
        </Container>

    )
}
export default HomeAdm;