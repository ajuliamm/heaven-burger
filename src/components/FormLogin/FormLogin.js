import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../Errors/Errors";
import { postLogin } from "../../API/Users";
import { StyledFormLogin, H1, MessageError } from "./Styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { setItens } from '../../utils/token';
import UserContext from "../../contexts/UserContext";

const FormLogin = (props) => {

    const {addToUser} = useContext(UserContext)
    const navigate = useNavigate()
    const email = useRef();
    const password = useRef();
    const msgEmptyFild = useRef();
    const msgErrorLogin = useRef();
    //const {setToken} = useContext();

    function changeToHomeScreen (e) {
        e.preventDefault();
        navigate('/');
    } 

    function btnLogar(e){
        e.preventDefault()
     
        if(email.current.value === '' || password.current.value === ''){
            msgEmptyFild.current.classList.remove('hidden-p');
            msgErrorLogin.current.classList.add('hidden-p');
        } else {
            msgEmptyFild.current.classList.add('hidden-p');
                postLogin(email.current.value, password.current.value)
                .then(async (response) => {  
                    if(response.status === 400){
                        const msgErro = handleError(await response.json());
                        msgErrorLogin.current.textContent = msgErro
                        return msgErrorLogin.current.classList.remove('hidden-p');
                    }else{
                        const resp = await response.json()

                        console.log(resp)
                        setItens(resp.accessToken);
                        addToUser(resp.user)
                        navigate('/HomeWaiter');
                     
                    }
                })
                .catch(error => console.log(error));
        }   
    }

    return (
        <StyledFormLogin>
            <H1 color='#E48B26' className={props.class}> {props.text} </H1>
            <Input class={props.class} ref={email} placeholder='Email' type='email'/>
            <Input ref={password}  class={props.class} placeholder='Senha' type='password' />
            <MessageError ref={msgErrorLogin} className='hidden-p' color='#E48B26'> </MessageError>
            <MessageError ref={msgEmptyFild}  className='hidden-p' color='#E48B26'> Preencha todos os campos </MessageError>
            <Button type='submit'id={props.class} onClick={btnLogar}>LOGIN</Button>
            <Button type='button' id={props.class}  onClick={changeToHomeScreen}>VOLTAR</Button>
        </StyledFormLogin>
    )
}

export default FormLogin;