import React, { Component, PropTypes } from 'react';
import EventListItem from 'components/EventListItem';

class EventList extends Component {

	componentWillMount() {
		const { fetchEventList } = this.props;
		fetchEventList();
	}

	render() {
		const { event } = this.props;

		var renderEventList = () => {
			if (typeof event.eventList == 'undefined') {
				return (
					console.log('loading events')
				);
			} else if (event.eventList.length === 0) {
				return (
					<p>No events to display</p>
				);
			}

			return event.eventList.map((event) => {
				return (
					<EventListItem key={event.id} {...event} />
				);
			});
		};

		return (
			<div className="panel panel-default">
				<div className="panel-heading">Events</div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Event</th>
							<th>Starts</th>
							<th>Ends</th>
						</tr>
					</thead>
					<tbody>
					{renderEventList()}
					</tbody>
				</table>
			</div>
		);
	}
}

EventList.propTypes = {
	fetchEventList     : PropTypes.func.isRequired,
};

export default EventList;