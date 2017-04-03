import * as Type from 'constants/action-types';

export default function event (state = {isFetching: false, eventList: undefined}, action) {
	switch (action.type) {
		case Type.START_EVENT_LIST_FETCH:
			return {
				isFetching: true,
				eventList: undefined
			};
		case Type.COMPLETE_EVENT_LIST_FETCH:
			return {
				isFetching: false,
				eventList: action.eventList
			};
		default:
			return state;
	}

}