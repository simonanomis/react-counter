import * as actionTypes from "./actionTypes"
import {CounterAction, CounterState} from "../type";
import { v4 as uuid } from 'uuid';

const initialState: CounterState = {
    counter: 0,
    results: []
}

const reducer = (state: CounterState = initialState, action: CounterAction) => {
    const id: string = uuid();
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
                counter: state.counter + action.value
            }
        case actionTypes.COUNT_RESULT:
            return {
                ...state,
                results: state.results.concat({id: id, value: state.counter})
            }
    }
    return state;
};

export default reducer;