import { CREATE_DECK, DELETE_DECK } from "../actions/deck";

const dummyState = [
  { key: "deck1", title: "Biology" },
  { key: "deck2", title: "Economy" },
  { key: "deck3", title: "Science" },
  { key: "deck4", title: "Programming" }
];

function decksReducer(state = dummyState, action) {
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
