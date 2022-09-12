import * as actionTypes from "./actionTypes"

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value: number) => {
    return {
        type: actionTypes.ADD,
        value: value
    }
};

export const subtract = (value: number) => {
    return {
        type: actionTypes.SUBTRACT,
        value: value
    }
};

export const storeResult = (result: number) => {
    return {
        type: actionTypes.COUNT_RESULT,
        result: result
    }
};

export const deleteResult = (resultId: string) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    }
};