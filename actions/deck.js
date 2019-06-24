export const CREATE_DECK = "CREATE_DECK";
export const DELETE_DECK = "DELETE_DECK";

export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    payload: deck
  };
}

export function deleteDeck(id) {
  return {
    type: DELETE_DECK,
    payload: id
  };
}
