import { render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';
import userEvent from '@testing-library/user-event';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@testing-library/jest-dom';


describe('Button', () => {
  it('should render the button correctly', () => {

    render(<Button id='login'>TEXTO_BOTÃO</Button>);
''
    const button = screen.getByText('TEXTO_BOTÃO');
    
    expect(button).toBeInTheDocument();
  });

  it('should calls onClick function when button is clicked',()=>{
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick}>TEXTO_BOTÃO</Button>);
     
    const button = screen.getByText('TEXTO_BOTÃO');
    userEvent.click(button);

    //expect(screen.getByText('Texto esperado')).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalled();
  });


});



