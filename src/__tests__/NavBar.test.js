import React from 'react';
import { render,screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import UserContext from '../contexts/UserContext';
import OrdersContext from '../contexts/OrdersContext';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('Navbar', () => {

  test('navega para a página de adicionar pedido ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const user = {
      role: 'atend',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const addButton = screen.getByRole('botão', { name: /Clique para adicionar pedido/i });

    addButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/NewOrder');
  });

  test('navega para a página de pedidos em andamento ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'atend',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );
    const backOrdersButton = screen.getByRole('botão', { name: /Clique para ver pedidos em andamento/i });

    backOrdersButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/BackOrders');
  });

  test('navigates to the completed orders page by clicking the corresponding button', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'atend',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );
    const finishedOrdersButton = screen.getByRole('botão', { name: /Clique para ver pedidos finalizados/i });

    finishedOrdersButton.click();
    

    expect(navigateMock).toHaveBeenCalledWith('/FinishedOrders');
  });

  test('navega para a página inicial ao clicar no botão de sair', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'atend',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const logoutButton = screen.getByRole('botão', { name: /Clique para sair do app/i });

    logoutButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  test('should navigate to HomeAdm', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'admin',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const homeButton = screen.getByRole('botão', { name: /Clique para voltar para o home/i });

    homeButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/HomeAdm');
  });

  
  test('should navigate to HomeWaiter', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'atend',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const homeButton = screen.getByRole('botão', { name: /Clique para voltar para o home/i });

    homeButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/HomeWaiter');
  });
  
  test('should navigate to HomeChef', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'chef',
    };

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders: [] }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const homeButton = screen.getByRole('botão', { name: /Clique para voltar para o home/i });

    homeButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/HomeChef');
  }); 

  
  test('should render clock icon ', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    const user = {
      role: 'admin',
    };
    const orders = []

    render(
      <UserContext.Provider value={{ user }}>
        <OrdersContext.Provider value={{ orders }}>
          <Navbar />
        </OrdersContext.Provider>
      </UserContext.Provider>
    );

    const homeButton = screen.getByRole('botão', { name: /Clique para ver pedidos em andamento/i });

    expect(homeButton).toBeInTheDocument;

  });

});
