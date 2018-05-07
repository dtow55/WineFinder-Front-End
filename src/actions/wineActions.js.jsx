export function loadWines() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WINES' });
    return fetch('http://localhost:4000/wines.json', {mode: 'no-cors'})
      .then(response => JSON.parse(response))
      .then(wines => dispatch({ type: 'FETCH_WINES', wines: wines }));
  }
}