import { wines } from './wines'

export default function winesReducer(state = wines, action) {
  switch (action.type) {
    case 'FETCH_WINES':
      return ;
    default: 
      return state;
  }
}