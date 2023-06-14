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
        navigate('/HomeAdm');
    }
    function changeToAdd(){
        navigate('/Add');
    }
    function changeToCollaborators(){
        navigate('/Collaborators');
    }
    function changeToProducts(){
        navigate('/Products');
    }

    return (
    <Header>
        <Button onClick={backToHomeScreen}>
            <ImageLogo logoDesktop='logoDesktop' src={LogoBege} />
        </Button>
        <Nav>         
            <Button role='botão' aria-label='Clique para ver pedidos em andamento' onClick={changeToAdd}>
            <i className='bi bi-plus-circle'></i>
            </Button>
            <Button role='botão' aria-label='Clique para ver pedidos finalizados' onClick={changeToCollaborators
            }>
                <i className="bi bi-person-circle"></i>
            </Button>
            <Button role='botão' aria-label='Clique para sair do app' onClick={changeToProducts}>
            <i class="bi bi-basket2-fill"></i>
            </Button>
        </Nav> 
    </Header>
    )
}
export default Navbar;