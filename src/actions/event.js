import * as Type from 'constants/action-types';
import axios from 'axios';

export function startEventListFetch() {
	return {
		type: Type.START_EVENT_LIST_FETCH
	};
};

export function completeEventListFetch(events) {
	return {
		type: Type.COMPLETE_EVENT_LIST_FETCH,
		events
	};
};

export function fetchEventList() {
	return dispatch => {
		startEventListFetch();

		axios.get('http://localhost:3000/events').then(function (res) {
			var events = res.data;
			dispatch(completeEventListFetch(events));
		}).catch( function(err) {
			console.log(err);
		});
	};
};