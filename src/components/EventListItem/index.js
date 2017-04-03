import React, { Component, PropTypes } from 'react';

class EventListItem extends Component {
	render() {
		var {reference} = this.props;

		return (
			<div>
				<p>{reference}</p>
			</div>
		)
	}
}

EventListItem.propTypes = {
	reference     : PropTypes.string.isRequired,
};

export default EventListItem;