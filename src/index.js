import React           from 'react';
import ReactDOM        from 'react-dom/client';
import reportWebVitals from './vitals/reportWebVitals';

import App from './App';

import './scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

);

reportWebVitals();