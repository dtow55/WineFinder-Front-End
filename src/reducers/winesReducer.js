export default function winesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_WINES':
      return action.wines;
    default: 
      return state;
  }
}