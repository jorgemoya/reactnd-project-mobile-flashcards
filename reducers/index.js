import { combineReducers } from "redux";
import decks from "./deck";
import cards from "./card";

export default combineReducers({
  cards,
  decks
});
