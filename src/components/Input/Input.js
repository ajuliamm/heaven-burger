import React, { forwardRef } from 'react'
import { StyledInput } from './Styles.js'

const Input = forwardRef((props, ref) => {
    return(
        <StyledInput className={props.class} ref={ref} placeholder={props.placeholder} type={props.type}/>
    )
});
export default Input; 