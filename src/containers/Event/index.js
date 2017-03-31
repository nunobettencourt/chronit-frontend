import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import * as EventActions from 'actions/event';

/* components */
import { EventSection } from 'components/EventSection';

const metaData = {
	title: 'Event'
};

@connect(
	state => ({
		events: state.events
	}),
	dispatch => bindActionCreators(EventActions, dispatch)
)

export class Event extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DocumentMeta {...metaData} />
				<EventSection {...this.props}/>
			</div>
		);
	}
}