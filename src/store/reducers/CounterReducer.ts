import * as actionTypes from "../actions/actionTypes"
import {CounterAction, CounterReducerState} from "../../type";

const initialState: CounterReducerState = {
    counter: 0
}

const counterReducer = (state: CounterReducerState = initialState, action: CounterAction) => {
    switch (action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
};

export default counterReducer;