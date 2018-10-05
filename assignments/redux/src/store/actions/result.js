import * as actionTypes from './actionTypes';

// Common Sync action
export const storeResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
};

// Async action (needs thunk)
// Pass all the parameters you might need instead of using getState().
export const asyncStoreResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // The state can reached before changes.
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);

      dispatch(storeResult(result));
    }, 2000);
  };
};

export const deleteResult = resultElementId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId
  };
};
