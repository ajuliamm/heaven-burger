import React from 'react';
import {  Nav, Button, Header, Div } from './Styles.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageLogo from '../ImageLogo/ImageLogo.js'
import LogoBege from '../../img/logoBege.png'
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../../utils/token.js';


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
    function logout(){
        navigate('/');
        clearLocalStorage()
    }

    return (
    <Header>
        <Button className='home' onClick={backToHomeScreen}>
            <ImageLogo logoDesktop='logoDesktop' src={LogoBege} />
        </Button>
        <Nav>         
            <Div>
                <Button role='botão' className='add' aria-label='Clique para ver pedidos em andamento' onClick={changeToAdd}>
                <i className='bi bi-plus-circle'></i>
                </Button>
            </Div>
            <Div>
                <Button role='botão' className='collaborators' aria-label='Clique para ver pedidos finalizados' onClick={changeToCollaborators}>
                    <i className="bi bi-person-circle"></i>
            </Button>
            </Div>
            <Div>
                <Button role='botão' className='products' aria-label='Clique para sair do app' onClick={changeToProducts}>
                <i className="bi bi-basket2-fill"></i>
                </Button>
            </Div>
            <Div>
                <Button role='botão' className='logout' aria-label='Clique para sair do app' onClick={logout}>
                    <i className='bi bi-box-arrow-left'></i>
                </Button>
            </Div>
        </Nav> 
    </Header>
    )
}
export default Navbar;