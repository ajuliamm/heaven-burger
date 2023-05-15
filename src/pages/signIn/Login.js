import React from 'react';
import styled from 'styled-components';
import LogoOrange from '../../img/Orange2.png';
import Form from '../../components/Form/Form';
import ImageLogo from '../../components/ImageLogo/ImageLogo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    min-height: 100vh;  
`;

export default function Login() {
    
    // const navigate = useNavigate()

    // function changeToHomeScreen () {
    //     navigate('/')
    // }
    
    // const email = useRef();
    // const password = useRef();
    // const msgEmptyFild = useRef();
    // const msgErrorLogin = useRef();

    // const [user , setUser] = useState("");
    
    // function btnLogar(e){
    //     e.preventDefault()
    //     console.log(email)
     
    //     if(email.current.value === '' || password.current.value === ''){
    //         msgEmptyFild.current.classList.remove('hidden-p')
    //         msgErrorLogin.current.classList.add('hidden-p');
    //     } else {
    //         msgEmptyFild.current.classList.add('hidden-p')
    //         postLogin(email.current.value, password.current.value)
    //         .then(async (response) => {  
    //             console.log(response)      
               
    //             if(response.status === 400){
    //                 const msgErro = handleError(await response.json());
    //                 msgErrorLogin.current.textContent = msgErro
    //                 return msgErrorLogin.current.classList.remove('hidden-p');
    //             }else{
    //                 navigate('/HomeWaiter')
    //             }
               
    //         })
    //         .catch(error => console.log(error));
    //     }   
    // }

   return ( 
        <Container backgroundColor ='#451e12'>
                <ImageLogo src={LogoOrange}/>
                <Form text='LOGIN' class='login' classSelect='hidden' textButton='ENTRAR'/>
        </Container>
   )
}