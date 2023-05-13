import React, { useRef } from 'react';
import Button from '../Button/Button';
import { postLogin, postRegister } from '../../API/Users';
import { handleError } from '../../Errors/Errors';
import { useNavigate } from 'react-router-dom';
import { StyledForm, Input, H1, MessageError, Div, TextRegister, Select } from './Styles';


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
        e.preventDefault()
        console.log(email)
     
        if(email.current.value === '' || password.current.value === ''){
            msgEmptyFild.current.classList.remove('hidden-p')
            msgErrorLogin.current.classList.add('hidden-p');
        } else {
            msgEmptyFild.current.classList.add('hidden-p')
            if(props.class === 'login'){
                postLogin(email.current.value, password.current.value)
                .then(async (response) => {  
                    console.log(response)      
                
                    if(response.status === 400){
                        const msgErro = handleError(await response.json());
                        msgErrorLogin.current.textContent = msgErro
                        return msgErrorLogin.current.classList.remove('hidden-p');
                    }else{
                        navigate('/HomeWaiter')
                    }
                })
                .catch(error => console.log(error));
            }
            else{
                postRegister(email.current.value, password.current.value, team.current.value)
            }
        }   
    }
    console.log(props)
    
    return (

        <StyledForm className={props.class}>
            <H1 color='#E48B26' className={props.class}> {props.text} </H1>
            <Input className={props.class} ref={email} placeholder='Email' type='email'/>
            <Input ref={password}  className={props.class} placeholder='Senha' type='password' />
            <Div className={props.classSelect}>
               <TextRegister color='#3E180C'> Qual é o seu time? </TextRegister>
                <Select ref={team}
                    color='#E8B25A'>                         
                        <option hidden>...</option>
                        <option value='waiter'>Atendente</option>
                        <option value='chef'>Chefe de Cozinha</option>
                        <option value='admin'>Administrador</option>
                </Select>  
            </Div>
            <MessageError ref={msgErrorLogin} className='hidden-p' color='#E48B26'> </MessageError>
            <MessageError ref={msgEmptyFild}  className='hidden-p' color='#E48B26'> Preencha todos os campos </MessageError>
            <Button type='submit'id={props.class} text={props.textButton} onClick={btnLogar} />
            <Button type='button' id={props.class} text='VOLTAR' onClick={changeToHomeScreen} />   
        </StyledForm>
    )
}

export default Form;