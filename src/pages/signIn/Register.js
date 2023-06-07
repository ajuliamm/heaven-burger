import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../../components/ImageLogo/ImageLogo';
import LogoBrown from '../../img/Brown2.png';
import FormRegister from '../../components/FormRegister/FormRegister';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    min-height: 100vh;  
`;

const Register = () => {
    
    return (
        <Container backgroundColor= '#E99331'>
            <ImageLogo src={LogoBrown}/>
            <FormRegister text='CADASTRO'  class='register' classSelect='active' textButton='CADASTRAR'/>
        </Container>
    )
}

export default Register;


// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: ${props => props.backgroundColor};
//     width: 100vw;
//     min-height: 100vh;  
// `;

// export default function Register() {

//     const navigate = useNavigate();

//     function changeToHomeScreen(){
//         navigate('/');
//     }

//     const email = useRef();
//     const password = useRef();
//     const team = useRef();

//     function btnRegister(event){

//         event.preventDefault()
//         postRegister(email.current.value, password.current.value, team.current.value)
//     }

//     return (   
//     <Container backgroundColor = '#E99331'>
//         <ImageLogo  src={LogoBrown}/>
//         <H1 color='#64300F' text='CADASTRAR'>
//           
//         </H1>
//         <Form>
//             <Input ref={email}
//                 backgroundColor = '#451E12'
//                 placeholder='Email'
//                 type='text'
//                 color='#E8B25A'
//                 opacity='0.6'/>
//             <Input ref={password}
//                 backgroundColor = '#451E12'
//                 color='#E8B25A'
//                 placeholder='Senha' 
//                 type='password'
//                 opacity='0.6'/>
//             <div>
//                 <TextRegister color='#3E180C'>
//                     Qual é o seu time?
//                 </TextRegister>
//                 <Select ref={team}
//                     color='#E8B25A'>
//                         <option hidden>...</option>
//                         <option value='waiter'>Atendente</option>
//                         <option value='chef'>Chefe de Cozinha</option>
//                         <option value='admin'>Administrador</option>
//                 </Select>  
//             </div>
//             <Button onClick={btnRegister}
//             color='#3E180C'
//             backgroundColor = 'rgb(69, 30, 18, 30%)'> 
//                 CADASTRAR
//             </Button>
//             <Button 
//             onClick={changeToHomeScreen}
//             color='#3E180C'
//             backgroundColor = 'rgb(69, 30, 18, 30%)'> 
//                 VOLTAR
//             </Button>
//         </Form>
//     </Container>
//     )
// }

