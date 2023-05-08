import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import { 
    H1, 
    Form,
    Input, 
    Button, 
    MessageError, 
    Container } from './Style.js';

import LogoOrange from '../img/LogoOrange.svg';
import { postLogin } from '../API/Users.js';

export default function Login() {
    
    const navigate = useNavigate()

    function changeToHomeScreen () {
        navigate('/')
    }
    
    const email = useRef();
    const password = useRef();
    const msgEmptyFild = useRef();
    const msgEmailInvalid = useRef();
    const msgErrorPassword = useRef();

    // const [user , setUser] = useState("");
    
    function btnLogar(e){
        e.preventDefault()
     
        if(email.current.value === '' || password.current.value === ''){
            msgEmptyFild.current.classList.remove('hidden-p')
        } else {
            postLogin(email.current.value, password.current.value)
            .then(async (response) => {
                console.log(response);
            
              console.log(await response.json())
                if(response.status === 400){
                    if(await response.json() === 'Email format is invalid'){
                        msgEmailInvalid.current.classList.remove('hidden-p');
                        return console.log('Formato de email inválido');
                    }
                    return msgErrorPassword.current.classList.remove('hidden-p');
                } 
                else {
                    return console.log('erro');
                }
            })
            .catch(error => console.log(error));
        }   
    }

   return( 
    <Container 
    backgroundColor ='#451e12'>
            <img width={400} src={LogoOrange}/>
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

                <MessageError ref={msgEmailInvalid}
                className='hidden-p'
                color='#E48B26'>
                    Email inválido
                </MessageError>
                <Input ref={password}
                color='#451e12'
                placeholder='Senha' 
                type='password' 
                backgroundColor = '#C18050'/>
                <MessageError ref={msgErrorPassword}
                className='hidden-p'
                color='#E48B26'>
                    Senha incorreta
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