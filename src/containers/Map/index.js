import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import * as MapActions from 'actions/map';

/* components */
import { MapSection } from 'components/MapSection';

const metaData = {
	title: 'Map'
};

@connect(
	state => ({
		map: state.map
	}),
	dispatch => bindActionCreators(MapActions, dispatch)
)

export class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DocumentMeta {...metaData} />
				<MapSection {...this.props} />
			</div>
		);
	}
}