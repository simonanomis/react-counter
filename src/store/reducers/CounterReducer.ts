import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState: CounterReducerState = {
  counter: 0,
};

const counterReducer = (
  state: CounterReducerState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
  }
  return state;
};

export default counterReducer;
