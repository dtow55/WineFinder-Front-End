export default function storesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORES':
      return action.stores;
    default: 
      return state;
  }
}