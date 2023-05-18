import React from 'react';
import {  Nav, Button, Header } from './Styles.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

 const Navbar= () =>{

    const navigate = useNavigate();

    function changeToOrders(){
        navigate('/NewOrder');
    }

    return (
    <Header>
        <Nav>         
            <Button role='botão' aria-label='Clique para adicionar pedido' onClick={changeToOrders}>
                <i className='bi bi-plus-circle'></i>
                
            </Button>
            <Button role='botão' aria-label='Clique para ver pedidos em andamento'>
                <i className='bi bi-stopwatch'></i>
            </Button>
            <Button role='botão' aria-label='Clique para ver pedidos finalizados'>
                <i className='bi bi-check2-circle'></i>
            </Button>
            <Button role='botão' aria-label='Clique para sair do app'>
                <i className='bi bi-box-arrow-left'></i>
            </Button>
        </Nav> 
    </Header>
    )
}
export default Navbar;