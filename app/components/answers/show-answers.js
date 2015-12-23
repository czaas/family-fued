import React from 'react';

class ShowAnswers extends React.Component {

	constructor(){
		super();
	}
	handleDelete(answer){
		this.props.handleDelete(answer.id);
	}

	render() {
		let allAnswers = this.props.answers.map( (a) => {
				return <li key={a.id}>{a.answer}, {a.points} <a onClick={this.handleDelete.bind(this, a)}> delete</a></li>
			});

		return (
			<div>
				<h2>Question: {this.props.question}</h2>

				<h3>Answers</h3>
				<ul>
					{allAnswers}
				</ul>
			</div>
		);
	}
}

export default ShowAnswers;