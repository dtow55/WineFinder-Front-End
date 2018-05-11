export default function winesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_WINES':
      return action.wines;
    case 'FETCH_WINE':
      return action.wine;
    case 'SUBMIT_WINE':
      return state.concat(action.wine)
    default: 
      return state;
  }
}