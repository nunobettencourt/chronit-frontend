import React, { Component, PropTypes } from 'react';

class EventListItem extends Component {
	render() {
		var {reference, time_start, time_end} = this.props;

		return (
			<tr>
				<td>{reference}</td>
				<td>{time_start}</td>
				<td>{time_end}</td>
			</tr>
		)
	}
}

EventListItem.propTypes = {
	reference     : PropTypes.string.isRequired,
};

export default EventListItem;