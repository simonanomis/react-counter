import * as actionTypes from "../actions/actionTypes";
import { v4 as uuid } from "uuid";
import { updateObjectCounter } from "../utility";

const initialState: ResultReducerState = {
  results: [],
};

const deleteResult = (state: ResultReducerState, action: CounterAction) => {
  const copyOfResults = state.results.filter(
    (result: any) => result.id != action.resultId
  );
  return updateObjectCounter(state, { results: copyOfResults });
};

const resultReducer = (
  state: ResultReducerState = initialState,
  action: CounterAction
) => {
  const id: string = uuid();

  switch (action.type) {
    case actionTypes.COUNT_RESULT:
      return updateObjectCounter(state, {
        results: state.results.concat({ id, value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default resultReducer;
