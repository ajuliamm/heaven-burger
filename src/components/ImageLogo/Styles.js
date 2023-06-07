import styled from "styled-components";

export const StyledImage = styled.img`
    width: 300px;


    &.logoDesktop{
        width: 100px;
        display:none;

        @media(min-width:850px){
            display:block;
        }
    }

    &.HomeDesktop{
        display: none;

        @media(min-width: 850px) {
            width:700px;
            position: absolute;
            bottom:0;
            left:calc(50% - 300px);
            display:block;
        }
        @media(min-width: 1000px) {
            width:800px;
        }
    }

    &.HomeMobile{
        width: 300px;
        
        @media(min-width: 600px) {
            width:400px;
        } 
        @media(min-width: 850px) {
            display:none;
        }

    }

    @media(min-width: 670px) {
        width: 400px;
    }
`;