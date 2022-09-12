import * as actionTypes from "../actions/actionTypes"
import { v4 as uuid } from 'uuid';
import {CounterAction, CounterState, ResultReducerState} from "../../type";

const initialState: ResultReducerState = {
    results: []
}

const resultReducer = (state: ResultReducerState = initialState, action: CounterAction) => {
    const id: string = uuid();

    switch (action.type){
        case actionTypes.COUNT_RESULT:
            return {
                ...state,
                results: state.results.concat({id, value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const copyOfResults = state.results.filter((result: any) => result.id != action.resultId);
            return {
                ...state,
                results: copyOfResults            }
    }
    return state;
};

export default resultReducer;