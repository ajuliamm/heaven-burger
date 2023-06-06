import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import ImageLogo from '../components/ImageLogo/ImageLogo'

describe('ImageLogo', ()=> {
    it('should correctly render the image with the given class',()=>{
        const srcImage = './caminho/imagem.png'
        const logoDesktopClass = 'logo-desktop'

        render(<ImageLogo src={srcImage} logoDesktop={logoDesktopClass}/>)
      
        const image = screen.getByAltText('Logo heaven bueguer')

        expect(image).toBeInTheDocument;
        expect(image).toHaveAttribute('src', srcImage)
        expect(image).toHaveClass(logoDesktopClass)
    
    })
})