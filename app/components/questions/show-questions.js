import React from 'react';
import { Link } from 'react-router'

// 

export class ShowQuestions extends React.Component {

	constructor(){
		super();
	}

	handleDelete(question){
		this.props.deleteQuestion(question.id);
	}

	render() {
		var allQuestions = this.props.questions.map( (q) => {
			return <li key={q.id}><Link to={"/add-answer/" + q.id}>{q.name}</Link><a onClick={this.handleDelete.bind(this, q)}>delete</a></li>
		});
		return (
			<div>
				<h3>All Questions</h3>
				{allQuestions}
			</div>
		);
	}
}


export default ShowQuestions;