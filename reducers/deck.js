import { CREATE_DECK } from "../actions/deck";

function decksReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default decksReducer;
