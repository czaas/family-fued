import { combineReducers } from 'redux';
import _ from 'lodash';

let gameReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_GAME':

			action.newGame.id = (+new Date() + Math.floor(Math.random() * 999999));
			return [
				...state,
				action.newGame
			];
			
			break;
		case 'DELETE_QUESTION':

			var newState = _.remove(state, (question) => {
				return question.id !== parseInt(action.gameId, 10);
			});

			return newState;
			
			break;
		case 'ADD_ANSWER':
			var games = state.map((game) => {

				// looks for state game id vs incoming request id
				if (game.id === parseInt(action.gameId, 10)) {

					let answerId = (+new Date() + Math.floor(Math.random() * 999999));

					// adds new answer with old answers
					let allAnswers = [
						...game.answers, 
						{
							answer: action.newAnswer, 
							points: action.points, 
							id: answerId
					}];

						// creating a new copy of game and answers object in new object
					return Object.assign({}, game, { answers: allAnswers});
				} else {
					return game;
				}
				
			});
			
			return games;
			break;
		case 'DELETE_ANSWER':

			return state.map((game) => {
				if(game.id === parseInt(action.gameId, 10)) {

					game.answers = _.remove(game.answers, (answer) => {
						return answer.id !== action.answerId
					});
					
					return game;
				} else {
					return game;	
				}
				
			});

			break;
		default:
			return state;
	}
}

let allReducers = combineReducers({ games: gameReducer });



export default allReducers;