import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SelectProducts from '../Select/SelectProducts'
import { postRegisterProduct } from '../../API/Products';
import { useNavigate } from 'react-router-dom';
import { StyledForm, H1, MessageError, Div, TextRegister } from './Styles';
import ModalEx from "../Modal/Modal";
import checkIcon from "../../img/icon_check.png";

const FormRegisterProducts=()=>{

    const navigate = useNavigate();
    const nameProduct = useRef();
    const priceProduct = useRef();
    const msgEmptyFild = useRef();
    const msgErrorLogin = useRef();
    const typeProduct = useRef(); 

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };

    function changeToAdd (e) {
        e.preventDefault();
        navigate('/Add');
    } 
    
    function btnRegister(e){
        e.preventDefault();
        if(nameProduct.current.value === '' || priceProduct.current.value === '' || typeProduct.current.value === '...'){
            msgEmptyFild.current.classList.remove('hidden-p')
            msgErrorLogin.current.classList.add('hidden-p');
        } 
        else {
            msgEmptyFild.current.classList.add('hidden-p')
            postRegisterProduct(nameProduct.current.value, priceProduct.current.value, typeProduct.current.value).then(()=>{
                openModal();
                nameProduct.current.value = '';
                priceProduct.current.value = '';
                typeProduct.current.value = '...';

            });
        }   
    }
    return (

        <StyledForm >
            <H1 > CADASTRO PRODUTOS </H1>
            <Input ref={nameProduct} class='register' placeholder='Nome do produto' type='text'/>
            <Input  ref={priceProduct} class='register'placeholder='Preço do produto' type='text' />
            <Div>
                <TextRegister color='#3E180C'> Qual é o tipo do produto? </TextRegister>
                <SelectProducts ref={typeProduct}/>
            </Div>
            <MessageError ref={msgErrorLogin} className='hidden-p' > </MessageError>
            <MessageError ref={msgEmptyFild}  className='hidden-p' > Preencha todos os campos </MessageError>
            <Button type='submit'id='register' onClick={btnRegister}>CADASTRAR</Button> 
            <Button type='button' id='register' onClick={changeToAdd}>VOLTAR</Button>   
            <ModalEx
                textH2="Produto cadastrado com sucesso!"
                src={checkIcon}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </StyledForm>
    )
}

export default FormRegisterProducts;