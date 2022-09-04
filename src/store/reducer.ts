import * as actionTypes from "./actionTypes"


const initialState: CounterState = {
    counter: 0
}

const reducer = (state: CounterState = initialState, action: CounterAction) => {
    switch (action.type){
        case actionTypes.INCREMENT:
            return {
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                counter: state.counter + action.value
            }
    }
    return state;
};

export default reducer;