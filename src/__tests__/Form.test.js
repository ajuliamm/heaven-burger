import '@testing-library/jest-dom'
import Form from '../components/Form/Form';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router', ()=>({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate
}))
describe('Form component', () => {
  test('renders form inputs and buttons', () => {
    render(<Form class="login" text="Login" textButton="Logar" />);
    
    // Verifica se os elementos de entrada (input) estão presentes
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    
    const passwordInput = screen.getByPlaceholderText('Senha');
    expect(passwordInput).toBeInTheDocument();
    
    // Verifica se os elementos de botão estão presentes
    const submitButton = screen.getByText('Logar');
    expect(submitButton).toBeInTheDocument();
    
    const backButton = screen.getByText('VOLTAR');
    expect(backButton).toBeInTheDocument();
  });

  test('calls btnLogar function on button click', () => {
    render(<Form class="login" text="Login" textButton="Logar" />);
    
    // Simula a inserção de valores nos campos de entrada
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    const passwordInput = screen.getByPlaceholderText('Senha');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    // Simula o clique no botão de envio
    const submitButton = screen.getByText('Logar');
    fireEvent.click(submitButton);
    
    // Realize as asserções necessárias para verificar o comportamento esperado após o clique no botão.
    // Por exemplo, você pode verificar se a função `postLogin` foi chamada com os valores corretos ou se o componente `navigate` foi chamado.
  });

  // Adicione mais testes conforme necessário para cobrir outros cenários ou interações do componente.
});