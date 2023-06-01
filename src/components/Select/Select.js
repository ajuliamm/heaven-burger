import React, { forwardRef }from 'react';
import { StyledSelect } from './Style';

const Select = forwardRef((props, ref) => {
    //const team = useRef();
    return(
        //ref={team}
        <StyledSelect  color='#E8B25A' ref={ref}>                         
            <option hidden>...</option>
            <option value='atend'>Atendente</option>
            <option value='chef'>Chefe de Cozinha</option>
            <option value='admin'>Administrador</option>
        </StyledSelect>
    )
});

export default Select;