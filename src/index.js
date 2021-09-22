import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import ReactGA from 'react-ga';
import { HashRouter } from "react-router-dom";
ReactGA.initialize('UA-208216831-1');
ReactDOM.render(<HashRouter>
    <App />
</HashRouter>
    , document.getElementById('root'));
