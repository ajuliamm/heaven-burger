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

    @media(min-width: 670px) {
        width: 400px;
    }
`;