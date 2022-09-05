

interface CounterProps {
    ctr: number;
    onIncrementCounter: () => void;
    onDecrementCounter: () => void;
    onAddCounter: () => void;
    onSubtractCounter: () => void;
    onStoreResult: () => void;
    onDeleteResult: () => void;
    results?: numbers[]
}

interface CounterState {
    counter: number;
    results: numbers[]
}

interface CounterValues {
    id: string,
    value: number,
}

type CounterAction = {
    type: string
    value: number
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