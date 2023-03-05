import React from 'react';
import './scss/input.scss'

const Input = (props) => {
    return(
        <div className='input'>
            <div 
                id={props.id} 
                type={props.type} 
                value={props.value} 
                onChange={props.onchange}
                onClick={props.onclick}>
                {props.children}
            </div>
        </div>
    );
}

export default Input;