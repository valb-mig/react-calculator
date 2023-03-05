import React from 'react';
import './scss/container.scss'

const Container = (props) => {
    return(
        <div className='container'>
            {props.children}
        </div>
    );
}
export default Container;