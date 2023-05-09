import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import LogoOrange from '../img/LogoOrange.svg';
import { postLogin } from '../API/Users.js';
import { handleError } from '../Errors/Errors.js';
import {
    H1, 
    Form,
    Image,
    Input, 
    Button, 
    MessageError, 
    Container } from './Style.js';

export default function Login() {
    
    const navigate = useNavigate()

    function changeToHomeScreen () {
        navigate('/')
    }
    
    const email = useRef();
    const password = useRef();
    const msgEmptyFild = useRef();
    const msgEmailInvalid = useRef();
    const msgErrorLogin = useRef();

    // const [user , setUser] = useState("");
    
    function btnLogar(e){
        e.preventDefault()
     
        if(email.current.value === '' || password.current.value === ''){
            msgEmptyFild.current.classList.remove('hidden-p')
            msgErrorLogin.current.classList.add('hidden-p');
        } else {
            msgEmptyFild.current.classList.add('hidden-p')
            postLogin(email.current.value, password.current.value)
            .then(async (response) => {        
               
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
    }

   return( 
    <Container 
    backgroundColor ='#451e12'>
            <Image width={400} alt='Logo-heaven-bueguer' src={LogoOrange}/>
            <H1 color='#E48B26'>
                LOGIN
            </H1>
            <Form>
                <Input 
                ref={email}

                backgroundColor = '#C18050'
                placeholder='Email'
                type='email'
                color='#451E12'/>
                <Input ref={password}
                color='#451e12'
                placeholder='Senha' 
                type='password' 
                backgroundColor = '#C18050'/>
                <MessageError ref={msgErrorLogin}
                className='hidden-p'
                color='#E48B26'>
                </MessageError>
                <MessageError ref={msgEmptyFild}
                className='hidden-p'
                color='#E48B26'>
                    Preencha todos os campos
                </MessageError>
                <Button onClick={btnLogar}
                color='#E48B26'
                backgroundColor = 'rgb(176, 136, 90, 17%)'> 
                    ENTRAR
                </Button>
                <Button 
                onClick={changeToHomeScreen}
                color='#E48B26'
                backgroundColor = 'rgb(176, 136, 90, 17%)'> 
                    VOLTAR
                </Button>
            </Form>
        </Container>
   )
}