import React from 'react';

class ShowAnswers extends React.Component {

	render() {
		let allAnswers = this.props.answers.map( (a) => {
				return <li>{a.answer}, {a.points}</li>	
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