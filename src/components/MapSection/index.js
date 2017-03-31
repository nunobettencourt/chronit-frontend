import React, { Component } from 'react';
import { styles } from './styles.scss';
import Map from 'components/Map';


export class MapSection extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h2>Map Page</h2>
				</div>
				<Map {...this.props} />
			</div>
		);
	}
}
