import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../contexts/UserContext";
import { Container, Main, H1, Div, DivDev, DivIcon, Icon, ButtonBack } from './Styles';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Devs = () => {

    const navigate = useNavigate();

    const { user } = useContext(UserContext) 

    function backToHomeScreen(e) {
        e.preventDefault();
        if(user.role === 'atend'){
            navigate('/HomeWaiter');
        }
        else if(user.role === 'chef'){
            navigate('/HomeChef');
        }else if( user.role === 'admin'){
            navigate('/HomeAdm');
        }
        
    }
    return(
        <Container >
            <Main>
                <H1>Desenvolvedoras</H1>
                <Div>
                    <DivDev>
                        <img alt="AnaLeticia" height="450" width="290" src="https://user-images.githubusercontent.com/30864314/236303724-e5348305-580a-4d61-9b6f-0ee83b83b188.png" />
                        <DivIcon>
                            <Icon target="_blank" href='https://github.com/analeticiabacha/'><i className="bi bi-github"></i></Icon>
                            <Icon target="_blank" href='https://www.linkedin.com/in/analeticiabacha/'><i className="bi bi-linkedin"></i></Icon>
                        </DivIcon>
                    </DivDev>
                    <DivDev>
                        <img  alt="Angelina" height="450" width="290" src="https://user-images.githubusercontent.com/30864314/236303365-71384765-eb5d-45d7-b0fb-51164287d866.png"/>
                        <DivIcon>
                            <Icon target="_blank" href='https://github.com/ajuliamm/'><i className="bi bi-github"  ></i></Icon>
                            <Icon target="_blank" href='https://www.linkedin.com/in/angelinamelo/'><i className="bi bi-linkedin"></i></Icon>
                        </DivIcon>
                    </DivDev>

                </Div> 
                <ButtonBack onClick={backToHomeScreen}>Voltar</ButtonBack>               
            </Main>
        </Container>
    )
}

export default Devs
;