import React from 'react';
import {  Nav, Button, Header } from './Styles.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageLogo from '../ImageLogo/ImageLogo.js'
import LogoBege from '../../img/logoBege.png'
import { useNavigate } from 'react-router-dom';


 const Navbar = () => {

    const navigate = useNavigate();

    function backToHomeScreen(e) {
        e.preventDefault();
        navigate('/HomeChef');
    }
    function changeToBackOrders(){
        navigate('/BackOrders');
    }
    function changeToFinishedOrders(){
        navigate('/FinishedOrders');
    }
    function logout(){
        navigate('/');
    }

    return (
    <Header>
        <Button onClick={backToHomeScreen}>
            <ImageLogo logoDesktop='logoDesktop' src={LogoBege} />
        </Button>
        <Nav>         
            <Button role='botão' aria-label='Clique para ver pedidos em andamento' onClick={changeToBackOrders}>
                <i className='bi bi-stopwatch'></i>
            </Button>
            <Button role='botão' aria-label='Clique para ver pedidos finalizados' onClick={changeToFinishedOrders}>
                <i className='bi bi-check2-circle'></i>
            </Button>
            <Button role='botão' aria-label='Clique para sair do app' onClick={logout}>
                <i className='bi bi-box-arrow-left'></i>
            </Button>
        </Nav> 
    </Header>
    )
}
export default Navbar;