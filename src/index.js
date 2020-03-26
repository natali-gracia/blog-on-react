import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from './Components/ScrollToTop'


ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop> 
    </BrowserRouter>, document.getElementById('root'));

