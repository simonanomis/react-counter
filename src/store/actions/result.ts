import * as actionTypes from "./actionTypes";
import {Dispatch} from "redux";

export const saveResult = (result: number) => {
    return {
        type: actionTypes.COUNT_RESULT,
        result: result
    }
};

export const storeResult = (result: number) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 1000);
    }
};

export const deleteResult = (resultId: string) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    }
};