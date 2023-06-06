import React from 'react';
import { render, useEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('Navbar', () => {
  test('navega para a página de adicionar pedido ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByRole } = render(<Navbar />);
    const addButton = getByRole('botão', { name: /Clique para adicionar pedido/i });

    addButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/NewOrder');
  });

  test('navega para a página de pedidos em andamento ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByRole } = render(<Navbar />);
    const backOrdersButton = getByRole('botão', { name: /Clique para ver pedidos em andamento/i });

    backOrdersButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/BackOrders');
  });

  test('navigates to the completed orders page by clicking the corresponding button', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByRole } = render(<Navbar />);
    const finishedOrdersButton = getByRole('botão', { name: /Clique para ver pedidos finalizados/i });

    finishedOrdersButton.click();
    

    expect(navigateMock).toHaveBeenCalledWith('/FinishedOrders');
  });

  test('navega para a página inicial ao clicar no botão de sair', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByRole } = render(<Navbar />);
    const logoutButton = getByRole('botão', { name: /Clique para sair do app/i });

    logoutButton.click();

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
