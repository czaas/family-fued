import { createStore } from 'redux';

import reducers from './reducers.js';

function newGame (gameName, id) {
	return {
		type: 'ADD_GAME',
		newGame: {
			name: gameName
		}
	};
}


let store = createStore(reducers);

store.dispatch(newGame('Game 1'));
store.dispatch(newGame('Game 2'));
store.dispatch(newGame('Game 3'));

export default store;