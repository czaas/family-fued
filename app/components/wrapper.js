import React from 'react';

export class Wrapper extends React.Component {

	render() {
		return (
			<div>
				<h1>Family Feud</h1>
				{this.props.children}
			</div>
		);
	}
}