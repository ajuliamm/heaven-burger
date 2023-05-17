import { render, screen } from '@testing-library/react';
import Input from '../components/Input/Input';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Input', () => {
    it('should render the input correctly', () => {
  
      render(<Input placeholder='Email'/>);

      const emailInput = screen.getByPlaceholderText('Email');
      
      expect(emailInput).toBeInTheDocument();  
    });
  
    it('should check if onChange event fires when typing in input field', () => {

      render(<Input placeholder="Digite aqui" />);
    
      const inputElement = screen.getByPlaceholderText('Digite aqui');
    
      userEvent.type(inputElement, 'Texto digitado');
      expect(inputElement).toHaveValue('Texto digitado');
    });
  });