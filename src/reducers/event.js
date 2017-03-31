import * as Type from 'constants/action-types';

export default function event (state = {isFetching: false, events: undefined}, action) {
	switch (action.type) {
		case Type.START_EVENT_LIST_FETCH:
			return {
				isFetching: true,
				events: undefined
			};
		case Type.COMPLETE_EVENT_LIST_FETCH:
			return {
				isFetching: false,
				events: action.events
			};
		default:
			return state;
	}

}