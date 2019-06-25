import { ADD_CARD } from "../actions/card";
import { DELETE_DECK } from "../actions/deck";

function cardsReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      const { key, question, answer } = action.payload;

      if (key in state) {
        const deck = state[key];
        deck.push({ question, answer });

        return { ...state, [key]: deck };
      } else {
        return { ...state, [key]: [{ question, answer }] };
      }
    case DELETE_DECK:
      const { ...newState } = state;
      delete newState[action.payload];

      return newState;
    default:
      return state;
  }
}

export default cardsReducer;
