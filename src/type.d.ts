interface CounterProps {
  counter: number;
  onIncrementCounter: () => void;
  onDecrementCounter: () => void;
  onAddCounter: () => void;
  onSubtractCounter: () => void;
  onStoreResult: (result: number) => void;
  onDeleteResult: (id: string) => void;
  results: numbers[];
}

interface AppState {
  counter: CounterReducerState;
  results: ResultReducerState;
}
interface CounterReducerState {
  counter: number;
}

interface ResultReducerState {
  results: numbers[];
}

type CounterAction = {
  type: string;
  value: number;
  resultId: string;
  result: number;
};

type DispatchType = (args: CounterAction) => CounterAction;
