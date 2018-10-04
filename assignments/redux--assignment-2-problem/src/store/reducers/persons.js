import * as actionTypes from '../actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADDED:
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
    case actionTypes.PERSON_DELETED:
      const updatedPersons = state.persons.filter(
        person => person.id !== action.payload.personId
      );
      return {
        ...state,
        persons: updatedPersons
      };
    default:
      return state;
  }
};

export default reducer;
