import '@testing-library/jest-dom';
import React from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

// Mock do contexto UserContext
jest.mock('../../contexts/UserContext', () => ({
  __esModule: true,
  default: {
    addToUser: jest.fn()
  }
}));
describe('FormLogin', () => {
    
    it('should render the components correctly', ()=>{
      render(<FormLogin/>);

      const btnLogin = screen.getByRole('button', { name: 'LOGIN' });
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Senha');

      expect(btnLogin).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    })
    it('must test component functions correctly', () => {

      const btnLogarMock = jest.fn();

      render(<FormLogin btnLogar={btnLogarMock}/>);

      const btnLogin = screen.getByText('LOGIN');
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Senha');
      
      userEvent.type(emailInput, 'teste@email.com');
      userEvent.type(passwordInput,'passwordTeste');
      userEvent.click(btnLogin);

      //expect(mockNavigate).toHaveBeenCalled();
      // expect(mockNavigate).toHaveBeenCalledWith('/HomeWaiter');
      expect(btnLogarMock).toHaveBeenCalled();
    });
});


