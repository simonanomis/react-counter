import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import './index.css';

import reducer from "./store/reducer";
import App from "./App";

//Provider is a helper component that allows us to kind of inject our store into the React components

const store: Store<CounterState, CounterAction> & {dispatch: DispatchType} = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root")
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
