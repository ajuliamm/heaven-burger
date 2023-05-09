//import React from "react";

export function handleError(message){
    switch (message) {
        case 'Cannot find user':
            return 'Usuário não encontrado';
        case 'Incorrect password':
            return 'Senha incorreta';
        case 'Email format is invalid':
            return 'Formato do email inválido';
        default:
            return'Ocorreu algum erro';
    }
}