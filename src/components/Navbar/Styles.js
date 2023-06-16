import styled from "styled-components";

export const Header = styled.header`
    background: #451E12;
    /* padding: 0 40px; */
    width:100vw;
    height: 100px;
    border-bottom:1px solid rgb(219, 158, 113);
    display: flex;
    padding: 0 10px;
    
    @media(min-width: 850px) {
        width: 100px;
        min-height: 100vh;
        flex-direction: column;
        padding: 0;
    }
`;

export const Nav = styled.nav`
    width: 100%;
   
    display: flex;
    justify-content:space-around;
    align-items: center;
    
    
    @media(min-width: 850px) {
        height: calc(100% - 100px);
        flex-direction: column;
    }
`;
export const Div = styled.div`
    position:relative;
`;

export const Button = styled.button`
    color: #DB9E71;
    font-size:40px;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        transition: font-size 0.2s linear;
        -webkit-transition:font-size 0.3s;
        font-size: 50px;
        color: beige;
    }
    &.chef{
        display:none;
    }
    &.home{
       
        &:hover::after{
            content: 'Home';
            color: beige;
            font-size: 9px;
            position: absolute;
            top: 80px;
            left: 33px;
            
        }

    }

    &.backOrders{

        &:hover::after{
            content: 'pedidos em espera';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -18px;
            left: 0;
            
        }
        
    }
    &.finishedOrders{

        &:hover::after{
            content: 'pedidos finalizados';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -16px;
            left: 0;
            
            
        }
        
    }&.logout{

        &:hover::after{
            content: 'sair';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -5px;
            left: 25px;
            
        }
        
    }&.newOrder{

        &:hover::after{
            content: 'novo pedido';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -17px;
            left: 0;
            
        }
        
    }
    &.add{

        &:hover::after{
            content: 'adicionar';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -15px;
            left: 5px;
            
        }

    }
    &.collaborators{

        &:hover::after{
            content: 'colaboradores';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -10px;
            left: -5px;
            
        }

    }
    &.products{

        &:hover::after{
            content: 'produtos';
            color: beige;
            font-size: 9px;
            position: absolute;
            bottom: -10px;
            left: 5px;
            
        }

    }
`;