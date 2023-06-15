import React, { forwardRef } from 'react';
import { StyledSelect } from './Style';

const SelectProducts = forwardRef((props, ref) => {

    return(
        <StyledSelect ref={ref}> 
            <option hidden>...</option>                        
            <option value="breakfast">CAFÉ DA MANHÃ</option>
            <option value="appetizers">APERITIVOS</option>
            <option value="hamburgers">HAMBURGUERS</option>
            <option value="drinks">BEBIDAS</option>
        </StyledSelect>
    )
});

export default SelectProducts;