import React from "react";
import { render, screen } from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
  }));

describe('Footer', ()=>{

    it('Deve exibir corretamente os nomes dos desenvolvedores', ()=>{
        render(<Footer/>);
        const devs = screen.getByText('Ana Leticia B. Prince e Angelina Melo');
    
        expect(devs).toBeInTheDocument;
    })
    it("Deve exibir corretamente o texto 'Turma 9 - Laboratoria, 2023.'", ()=>{
        render(<Footer/>);
        const text = screen.getByText('Turma 9 - Laboratoria, 2023.');
    
        expect(text).toBeInTheDocument;
    })
    it("should navigate to Devs Screen", ()=>{
        const navigateMock = jest.fn();
        useNavigate.mockReturnValue(navigateMock);

        render(<Footer/>);
        const DivFooter = screen.getByText('Ana Leticia B. Prince e Angelina Melo');
        DivFooter.click()
        expect(navigateMock).toHaveBeenCalledWith("/Devs");
    })
})