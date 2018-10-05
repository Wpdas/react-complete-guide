// Common Actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action Creators (supports Async function)
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    value
  };
};

// Common Sync action
export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result
  };
};

// Async action (needs thunk)
export const asyncStoreResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  };
};

export const deleteResult = resultElementId => {
  return {
    type: DELETE_RESULT,
    resultElementId
  };
};
