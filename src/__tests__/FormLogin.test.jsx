import '@testing-library/jest-dom';
import React from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor  } from '@testing-library/react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../API/Users';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

jest.mock('../API/Users', () => ({
  postLogin: jest.fn(),
}));
// Mock do contexto UserContext
// jest.mock('../../contexts/UserContext', () => ({
//   __esModule: true,
//   default: {
//     addToUser: jest.fn()
//   }
// }));


describe('FormLogin', () => {
    
    it('should render the components correctly', ()=>{

    
      const addToUser = jest.fn();

      render(
          <UserContext.Provider value={{addToUser}}>
            <FormLogin/>
          </UserContext.Provider>);

      const btnLogin = screen.getByRole('button', { name: 'LOGIN' });
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Senha');

      expect(btnLogin).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    })
    it('must test component functions correctly',async  () => {

      useNavigate.mockReturnValue(mockNavigate);

      const addToUserMock = jest.fn();
      const postLoginMock = jest.fn().mockResolvedValue({
        status: 200,
        json: () =>
          Promise.resolve({
            accessToken: 'someAccessToken',
            user: { role: 'atend' },
          }),
      });
      postLogin.mockImplementation(postLoginMock);

      render(
          <UserContext.Provider value={{addToUser: addToUserMock}}>
            <FormLogin />
          </UserContext.Provider>);

      const btnLogin = screen.getByText('LOGIN');
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Senha');
      
      userEvent.type(emailInput, 'test@example.com');
      userEvent.type(passwordInput,'password123');
      userEvent.click(btnLogin);

      //expect(mockNavigate).toHaveBeenCalled();
      // expect(mockNavigate).toHaveBeenCalledWith('/HomeWaiter');
      expect(postLoginMock).toHaveBeenCalledWith(
        'test@example.com',
        'password123'
      );

      await waitFor(() => {
        expect(addToUserMock).toHaveBeenCalledWith({ role: 'atend' });
        expect(mockNavigate).toHaveBeenCalledWith('/HomeWaiter');
      });
    });
});


