import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
describe('Button', () => {
  test('should render the button correctly', () => {

    render(<Navbar />);

    expect(screen.getByText('add pedidos')).toBeInTheDocument();

  });
})





