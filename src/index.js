import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import ScrollToTop from './Components/ScrollToTop'
import postFavoritesReducer from './store/postFavoritesReducer'

const store = createStore(
    postFavoritesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App/>
            </ScrollToTop> 
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

