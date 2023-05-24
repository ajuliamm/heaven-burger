import React from 'react';
import {  Nav, Button, Header } from './Styles.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

 const Navbar = () => {

    const navigate = useNavigate();

    function changeToOrders(){
        navigate('/NewOrder');
    }
    function changeToBackOrders(){
        navigate('/BackOrders');
    function changeToFinishedOrders(){
        navigate('/FinishedOrders');
    }
    function logout(){
        navigate('/');
    }

    return (
    <Header>
        <Nav>         
            <Button role='botão' aria-label='Clique para adicionar pedido' onClick={changeToOrders}>
                <i className='bi bi-plus-circle'></i>
            </Button>
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