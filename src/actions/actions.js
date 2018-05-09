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

export function loadWine(wineId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WINE' });
    return fetch(`http://localhost:4000/wines/${wineId}.json`)
      .then(response => response.json())
      .then(wine => dispatch({ type: 'FETCH_WINE', wine: wine }));
  }
}

export function loadStore(storeId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STORE' });
    return fetch(`http://localhost:4000/stores/${storeId}.json`)
      .then(response => response.json())
      .then(store => dispatch({ type: 'FETCH_STORE', stores: store }));
  }
}