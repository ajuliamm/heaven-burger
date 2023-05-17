import styled from "styled-components";

export const StyledFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const H1 = styled.h1`
    // color: ${props => props.color};
    margin: 20px 0 50px 0;
    &.login{
        color: #E48B26;
    }
    &.register{
        color: #64300F;
    }
`;

export const MessageError = styled.p`
    color: ${props => props.color};
    font-weight: 700;
    font-size: 18px;
    &.hidden-p{
        display: none;
    }
`;