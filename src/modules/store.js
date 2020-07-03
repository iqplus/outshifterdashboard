import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

//const applyMiddleware = require('redux').applyMiddleware;

const middleware = () => {
    console.log('dette er middleware');
}

export default function configureStore() {
    const store = createStore(reducer, composeWithDevTools() 

    );
    
    return store;
}

  

