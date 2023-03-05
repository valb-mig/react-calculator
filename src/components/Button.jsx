import React from 'react';
import './scss/button.scss'

const Button = (props) => {
    return(
        <button className={'button '+props.class} onClick={props.onclick} value={props.title} type={props.type}>
            {props.title}
        </button>
    );
}
export default Button;