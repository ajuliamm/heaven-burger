import React, { useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { postRegister } from '../../API/Users';
import { useNavigate } from 'react-router-dom';
import { StyledForm, H1, MessageError, Div, TextRegister } from './Styles';

const Form=(props)=>{

    const navigate = useNavigate()
    const email = useRef();
    const password = useRef();
    const msgEmptyFild = useRef();
    const msgErrorLogin = useRef();
    const team = useRef();

    function changeToHomeScreen (e) {
        console.log('deu bom')
        e.preventDefault();
        navigate('/');
    } 
    
    function btnLogar(e){
        e.preventDefault();
     
        if(email.current.value === '' || password.current.value === ''){
            msgEmptyFild.current.classList.remove('hidden-p')
            msgErrorLogin.current.classList.add('hidden-p');
        } else {
            msgEmptyFild.current.classList.add('hidden-p')
            postRegister(email.current.value, password.current.value, team.current.value)
        }   
    }
    console.log(props);
    
    return (

        <StyledForm className={props.class}>
            <H1 color='#E48B26' className={props.class}> {props.text} </H1>
            <Input class={props.class} ref={email} placeholder='Email' type='email'/>
            <Input ref={password}  class={props.class} placeholder='Senha' type='password' />
            <Div className={props.classSelect}>
                <TextRegister color='#3E180C'> Qual é o seu time? </TextRegister>
                <Select ref={team} color='#E8B25A'/> 
            </Div>
            <MessageError ref={msgErrorLogin} className='hidden-p' color='#E48B26'> </MessageError>
            <MessageError ref={msgEmptyFild}  className='hidden-p' color='#E48B26'> Preencha todos os campos </MessageError>
            <Button type='submit'id={props.class} onClick={btnLogar}>CADASTRAR</Button> 
            <Button type='button' id={props.class} onClick={changeToHomeScreen}>VOLTAR</Button>  
        </StyledForm>
    )
}

export default Form;