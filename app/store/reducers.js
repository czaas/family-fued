import { combineReducers } from 'redux';

let gameReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_GAME':

			action.newGame.id = state.length;

			return [
				...state,
				action.newGame
			];
			break;
		default:
			return state;
	}
}

let allReducers = combineReducers({ games: gameReducer });

export default allReducers;