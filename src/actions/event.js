import * as Type from 'constants/action-types';
import axios from 'axios';

export function startEventListFetch() {
	return {
		type: Type.START_EVENT_LIST_FETCH
	};
};

export function completeEventListFetch(eventList) {
	return {
		type: Type.COMPLETE_EVENT_LIST_FETCH,
		eventList
	};
};

export function fetchEventList() {
	return dispatch => {
		startEventListFetch();

		axios.get('http://localhost:3000/events').then(function (res) {
			var eventList = res.data;
			dispatch(completeEventListFetch(eventList));
		}).catch( function(err) {
			console.log(err);
		});
	};
};