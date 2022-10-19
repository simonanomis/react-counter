import * as React from "react";
import { render } from "react-dom";
import {
  createStore,
  applyMiddleware,
  Store,
  combineReducers,
  compose,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";

import resultReducer from "./store/reducers/ResultReducer";
import counterReducer from "./store/reducers/CounterReducer";
import App from "./App";
import { logger } from "./middleware";

//Provider is a helper component that allows us to kind of inject our store into the React components

const rootReducer = combineReducers<AppState>({
  counter: counterReducer,
  results: resultReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<AppState> & { dispatch: DispatchType } = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
