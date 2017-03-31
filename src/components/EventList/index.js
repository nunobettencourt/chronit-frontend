import React, { Component, PropTypes } from 'react';

class EventList extends Component {

	componentWillMount() {
		const { fetchEventList } = this.props;
		fetchEventList();
	}

	render() {
		const { events } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<p>Clicked: <span className="badge">{events}</span> times</p>
				</div>
			</div>
		);
	}
}

EventList.propTypes = {
	fetchEventList     : PropTypes.func.isRequired,
};

export default EventList;