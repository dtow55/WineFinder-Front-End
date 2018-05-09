export function loadWines() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WINES' });
    return fetch('http://localhost:4000/wines.json')
      .then(response => response.json())
      .then(wines => dispatch({ type: 'FETCH_WINES', wines: wines }));
  }
}

export function loadStores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STORES' });
    return fetch('http://localhost:4000/stores.json')
      .then(response => response.json())
      .then(stores => dispatch({ type: 'FETCH_STORES', stores: stores }));
  }
}
