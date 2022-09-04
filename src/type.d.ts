interface CounterProps {
    ctr: number;
    onIncrementCounter: () => void;
    onDecrementCounter: () => void;
    onAddCounter: () => void;
    onSubtractCounter: () => void;
}

interface CounterState {
    counter: number;
}

type CounterAction = {
    type: string
    value: number
}

type DispatchType = (args: CounterAction) => CounterAction