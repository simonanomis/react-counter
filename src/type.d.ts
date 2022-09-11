interface CounterProps {
    counter: number;
    onIncrementCounter: () => void;
    onDecrementCounter: () => void;
    onAddCounter: () => void;
    onSubtractCounter: () => void;
    onStoreResult: (result: number) => void;
    onDeleteResult: (id: string) => void;
    results: numbers[]
}

interface CounterState {
    counter: number;
    results: numbers[]
}

interface AppState {
    counter: CounterReducerState;
    results: ResultReducerState;
}
interface CounterReducerState {
    counter: number;
}

interface ResultReducerState {
    results: numbers[]
}

interface CounterValues {
    id: string,
    value: number,
}

type CounterAction = {
    type: string
    value: number
    resultId: string
    result: number
}

export enum ECounterOperations{
    INCREMENT,
    DECREMENT,
    ADD,
    SUBTRACT,
    COUNT_RESULT
}

interface DispatchProps {
    type: ECounterOperations
}

type DispatchType = (args: CounterAction) => CounterAction