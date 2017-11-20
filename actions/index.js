export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function getDeckById (id, deck) {
  return {
    type: GET_DECK,
    id,
    deck
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addQuestion (id, question) {
  return {
    type: ADD_QUESTION,
    id,
    question
  }
}
