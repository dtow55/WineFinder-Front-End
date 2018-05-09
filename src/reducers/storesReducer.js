export default function storesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORES':
      return action.stores;
    case 'FETCH_STORE':
      return action.store;
    default: 
      return state;
  }
}