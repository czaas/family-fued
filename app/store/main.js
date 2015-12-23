import { createStore } from 'redux';

import reducers from './reducers.js';

export function newGame (gameName) {
	return {
		type: 'ADD_GAME',
		newGame: {
			name: gameName,
			answers: []
		}
	};
}

export function deleteQuestion(obj){
	return {
		type: 'DELETE_QUESTION',
		gameId: obj.gameId
	}
}

export function newAnswer(a){
	return {
		type: 'ADD_ANSWER',
		points: a.points,
		newAnswer: a.answer,
		gameId: a.gameId
	}
}

export function deleteAnswer(obj){
	return {
		type: 'DELETE_ANSWER',
		answerId: obj.answerId,
		gameId: obj.gameId
	}
}

let store = createStore(reducers);

// Adding questions
store.dispatch(newGame('Game 0 question'));
store.dispatch(newGame('Game 1 question'));
store.dispatch(newGame('Game 2 question'));

export default store;