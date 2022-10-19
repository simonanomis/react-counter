export const updateObject = (
  oldObject: CounterReducerState,
  updatedValues: CounterReducerState
) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const updateObjectCounter = (
  oldObject: ResultReducerState,
  updatedValues: ResultReducerState
) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};
