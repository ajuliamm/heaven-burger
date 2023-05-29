import React, { useEffect, useState } from "react";
import { H1, Container, DivItem, ContainerItem, InfoItem, DivQtd, H3, BtnQtd, Quantity, Total } from "./Styles";
import Input from '../Input/Input'
import Button from '../Button/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

const OrderResume = ({ setListOrder, listOrder, setResume, resume }) => {

    console.log(resume)
    console.log(listOrder) 

    const [sumPrice, setSumPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let totalPrice = 0;
      
        listOrder.forEach(product => {
          totalPrice += parseFloat(product.price); //converte string p decimal
        });
      
        setSumPrice(totalPrice.toFixed(2));
      }, [listOrder]);

    function backToHomeScreen(e) {
        e.preventDefault();
        navigate('/HomeWaiter');
    }
    function deleteItem(product){
        //console.log(product)
        
        console.log('botão clicado');
        let updateResume = [...resume];
        const foundIndex = resume.findIndex((element) => element === product);
        updateResume.splice(foundIndex, 1);

        let updatedListOrder = [...listOrder];
        const filtro = updatedListOrder.filter(element => element !== product.product)
        console.log(filtro);
        
        setResume(updateResume);
        //console.log(listOrder);
        setListOrder(filtro);
        //console.log(listOrder);
    }
    
    return (
        <Container backgroundColor='#451E12'>

            <H1>RESUMO DO PEDIDO</H1>
            <Input placeholder='CLIENTE' type='text' class='client' />

            <H3> Item / Valor R$ / Qtd </H3>
            <ContainerItem>
                {resume.map(product => (
                    <DivItem key={product.product.id}>
                        <InfoItem className='styleName'>{product.product.name}</InfoItem>
                        <InfoItem className='stylePrice'>{product.product.price.toFixed(2)}</InfoItem>
                        <InfoItem>
                            <DivQtd>
                                <BtnQtd><i className="bi bi-dash-square-fill"></i></BtnQtd>
                                <Quantity> {product.qty} </Quantity>
                                <BtnQtd><i className="bi bi-plus-square-fill"></i></BtnQtd>
                            </DivQtd>
                        </InfoItem>
                        <Button onClick={() => deleteItem(product)} id='trash'><i className="bi bi-trash3"></i></Button>
                    </DivItem>
                ))}
            </ContainerItem>
            <Total>Total: R$ {sumPrice}</Total>
            <Button id='orderResume'>ENVIAR PARA PREPARO</Button>
            <Button id='orderResume' onClick={backToHomeScreen}>VOLTAR</Button>
        </Container>
    )
}
export default OrderResume;