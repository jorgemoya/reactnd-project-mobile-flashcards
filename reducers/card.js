import { ADD_CARD } from "../actions/card";
import { DELETE_DECK } from "../actions/deck";

const initState = {
  Biology: [
    { question: "How many bones does the human body have?", answer: "206" },
    {
      question: "How many pints of blood does the human body have?",
      answer: "Between 9 and 12"
    }
  ],
  Math: [
    { question: "2 + 2", answer: "4" },
    {
      question: "10 + 5",
      answer: "15"
    }
  ],
  Programming: [
    {
      question: "In what year was the first personal computer made?",
      answer: "1975"
    }
  ]
};

function cardsReducer(state = initState, action) {
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
