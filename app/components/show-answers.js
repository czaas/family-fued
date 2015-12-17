import React from 'react';

class ShowAnswers extends React.Component {

	render() {
		let allAnswers = this.props.answers.map( (a) => {
			console.log(a);
				return <li>{a.answer}, {a.points}</li>	
			});

		return (
			<div>
				<ul>
					{allAnswers}
				</ul>
			</div>
		);
	}
}

export default ShowAnswers;