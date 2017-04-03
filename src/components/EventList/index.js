import React, { Component, PropTypes } from 'react';
import eventListItem from 'components/eventListItem';

class EventList extends Component {

	componentWillMount() {
		const { fetchEventList } = this.props;
		fetchEventList();
	}

	render() {
		const { eventList } = this.props;
		var renderEventList = () => {
			if(eventList.length === 0) {
				return (
					<p>No events to display</p>
				);
			}

			return eventList.map((event) => {
				return (
					<eventListItem key={event.id} {...event} />
				);
			});
		};

		return (
			<div className="panel panel-default">
				<div className="panel-body">
					{renderEventList()}
				</div>
			</div>
		);
	}
}

EventList.propTypes = {
	fetchEventList     : PropTypes.func.isRequired,
};

export default EventList;