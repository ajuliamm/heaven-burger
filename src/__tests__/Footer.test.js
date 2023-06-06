import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe('Footer', ()=>{

    it('Deve exibir corretamente os nomes dos desenvolvedores', ()=>{
        render(<Footer/>);
        const devs = screen.getByText('Ana Leticia B. Prince e Angelina Melo');
    
        expect(devs).toBeInTheDocument;
    })
    it("Deve exibir corretamente o texto 'desenvolvido por:'", ()=>{
        render(<Footer/>);
        const text = screen.getByText('Desenvolvido por:');
    
        expect(text).toBeInTheDocument;
    })
})