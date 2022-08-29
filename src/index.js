import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { legacy_createStore as createStore} from 'redux'
import reducer from "./store/reducer";
import {Provider} from "react-redux";

//Provider is a helper component that allows us to kind of inject our store into the React components

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
