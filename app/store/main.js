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

// adding answers
store.dispatch(newAnswer({answer: 'Test', gameId: '2', points: 10 }));
store.dispatch(newAnswer({answer: 'This should be an answer', gameId: '2', points: 67 }));
store.dispatch(newAnswer({answer: 'Third answer', gameId: '2', points: 32 }));

store.dispatch(deleteAnswer({ answerId: 1, gameId: '2' }));

export default store;