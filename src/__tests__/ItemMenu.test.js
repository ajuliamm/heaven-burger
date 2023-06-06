import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemMenu from '../components/ItemMenu/ItemMenu';
import '@testing-library/jest-dom/extend-expect';


describe('ItemMenu', () => {
  test('chama a função onClick ao clicar no botão', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <ItemMenu name="Nome do Item" price={9.99} onClick={onClickMock} />
    );

    const button = getByText('Nome do Item');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('exibe o nome e preço do item corretamente', () => {
    const { getByText } = render(
      <ItemMenu name="Nome do Item" price={9.99} onClick={jest.fn()} />
    );

    const nameElement = getByText('Nome do Item');
    const priceElement = getByText('9.99');

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});