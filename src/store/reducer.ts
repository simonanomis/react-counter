import * as actionTypes from "./actionTypes"


const initialState: CounterState = {
    counter: 0
}

const reducer = (state: CounterState = initialState, action: CounterAction) => {
    if (action.type === actionTypes.INCREMENT) {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === actionTypes.DECREMENT) {
        return {
            counter: state.counter - 1
        }
    }

    if (action.type === actionTypes.ADD) {
        return {
            counter: state.counter + action.value
        }
    }

    if (action.type === actionTypes.SUBTRACT) {
        return {
            counter: state.counter - action.value
        }
    }
    return state;
};

export default reducer;