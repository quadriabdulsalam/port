import React from 'react'
import './forminput.css';
import { useState } from 'react';

function FORMINPUT(Props) {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onchange, id, ...inputprops} = Props;
    const handler = (e)=>{
        setFocused(true);
    };
    return (
        <div className='forminput'>
            <label>{label}</label>
            <input {...inputprops} onchange={onchange} onBlur={handler} onFocus={()=>inputprops.name==='confirmPassword' && setFocused(true)} focused={focused.toString()}></input>
            <span>{errorMessage}</span>
        </div>
        
    )
}

export default FORMINPUT
