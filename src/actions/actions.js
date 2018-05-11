// ***ASYNC ACTIONS***

//Loads the index of all wines in JSON format from backend API
export function loadWines() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WINES' });
    return fetch('http://localhost:4000/wines.json')
      .then(response => response.json())
      .then(wines => dispatch({ type: 'FETCH_WINES', wines: wines }));
  }
}

//Loads the index of all stores in JSON format from backend API
export function loadStores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STORES' });
    return fetch('http://localhost:4000/stores.json')
      .then(response => response.json())
      .then(stores => dispatch({ type: 'FETCH_STORES', stores: stores }));
  }
}

//Loads data on a particular wine in JSON format from backend API
export function loadWine(wineId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WINE' });
    return fetch(`http://localhost:4000/wines/${wineId}.json`)
      .then(response => response.json())
      .then(wine => dispatch({ type: 'FETCH_WINE', wine: wine }));
  }
}

//Loads data on a particular store in JSON format from backend API
export function loadStore(storeId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STORE' });
    return fetch(`http://localhost:4000/stores/${storeId}.json`)
      .then(response => response.json())
      .then(store => dispatch({ type: 'FETCH_STORE', store: store }));
  }
}

//Submits a new wine form to backend CREATE route and adds the response
//...(a new wine) to state
export function submitWine(formContent) {
  return (dispatch) => {
    dispatch({ type: 'SUBMITING_WINE' });
    //POST method sends stringified-JSON in the body, and a header that specifies
    //that the body is in JSON format rather than the regular serialized format
    return fetch(`http://localhost:4000/wines`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({wine: formContent})})
      .then(response => response.json())  //The backend must be redirecting to a wines/:id.json show page for this to work
      .then(wine => dispatch({ type: 'SUBMIT_WINE', wine: wine }));
  }
}