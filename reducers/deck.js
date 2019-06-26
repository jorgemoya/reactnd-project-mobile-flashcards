import { CREATE_DECK, DELETE_DECK } from "../actions/deck";

const initState = [{ key: "Biology" }, { key: "Programming" }, { key: "Math" }];

function decksReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_DECK:
      return [...state, action.payload];
    case DELETE_DECK:
      return state.filter(deck => deck.key !== action.payload);
    default:
      return state;
  }
}

export default decksReducer;
