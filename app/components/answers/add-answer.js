import React from 'react';

export class AddAnswerForm extends React.Component {

	constructor(){
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

		let answer = {
			answer: this.refs.answer.value,
			points: this.refs.points.value
		};

		this.props.handleAnswer(answer);

		this.refs.answerForm.reset();
	}

	render() {

		return (

			<div>
				<form ref='answerForm' onSubmit={this.handleSubmit}>
					<input type='text' ref='answer' placeholder='New Answer' />
					<input type='number' ref='points' min='0' max='100' placeholder='points' />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}