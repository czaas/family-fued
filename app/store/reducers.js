import { combineReducers } from 'redux';

let gameReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_GAME':

			action.newGame.id = (+new Date() + Math.floor(Math.random() * 999999));
			return [
				...state,
				action.newGame
			];
			
			break;
		case 'ADD_ANSWER':
			let games = state.map((game) => {

				// looks for state game id vs incoming request id
				if (game.id === parseInt(action.gameId, 10)) {

					let answerId = (+new Date() + Math.floor(Math.random() * 999999));

					// adds new answer with old answers
					let allAnswers = [...game.answers, {answer: action.newAnswer, points: action.points, id: answerId }];

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
					let indexOfAnswer;

					game.answers.map( ( answer, i ) => {
						if(answer.id === parseInt(action.answerId, 10)){
							indexOfAnswer = i;		
						}
					});
					
					game.answers.splice(indexOfAnswer, 1);
					return game;
				} else {
					return game;	
				}
				
			});
			return state;
			break;
		default:
			return state;
	}
}

let allReducers = combineReducers({ games: gameReducer });



export default allReducers;