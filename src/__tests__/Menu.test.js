import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Menu from '../components/Menu/Menu';
import { getProducts } from "../API/Products";

jest.mock("../API/Products");
const mockGetProducts = jest.fn(() => [
    { id: 1, name: "Product 1", price: 10, type: "breakfast" },
    { id: 2, name: "Product 2", price: 15, type: "breakfast" },
    { id: 3, name: "Product 3", price: 12, type: "appetizers" },
  ]);



describe('Menu', () => {
  it('should render correctly the buttons', async () => {
    render(<Menu />);
    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1));

    const btnBreakfast = screen.getByText('CAFÉ DA MANHÃ');
    const btnAppetizer = screen.getByText('APERITIVOS');
    const btnBurgers = screen.getByText('HAMBURGUERS');
    const btnDrinks = screen.getByText('BEBIDAS');

    expect(btnBreakfast).toBeInTheDocument();
    expect(btnAppetizer).toBeInTheDocument();
    expect(btnBurgers).toBeInTheDocument();
    expect(btnDrinks).toBeInTheDocument();
  });

  it('should correctly render products from the selected category', async () => {
    //getProducts.mockImplementation(mockGetProducts);
    getProducts.mockResolvedValueOnce(mockGetProducts);

    render(<Menu />);
    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1));

    const btnBreakfast = screen.getByText('CAFÉ DA MANHÃ');
    const btnAppetizer = screen.getByText('APERITIVOS');
    const btnBurgers = screen.getByText('HAMBURGUERS');
    const btnDrinks = screen.getByText('BEBIDAS');

    btnBreakfast.click();

    const product1 = screen.getByText('Product 1');
    const contentProduct1 = product1.textContent;
    const product2 = screen.getByTestId('Product 2');
    const contentProduct2 = product2.textContent;

    expect(btnBreakfast).toBeInTheDocument();
    expect(btnAppetizer).toBeInTheDocument();
    expect(btnBurgers).toBeInTheDocument();
    expect(btnDrinks).toBeInTheDocument();
    expect(contentProduct1).toBe('Product 1');
    expect(contentProduct2).toBe('Product 2');
  });
});

