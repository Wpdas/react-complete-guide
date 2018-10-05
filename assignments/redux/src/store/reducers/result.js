import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

// *1 Optional approach, to separate each function do be executed in each specific case from Switch
const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElementId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // The common way to just write the specific solution
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      });
    case actionTypes.DELETE_RESULT:
      // *1 The optional way to leaner the switch cases
      return deleteResult();

    default:
      return state;
  }
};

export default reducer;
