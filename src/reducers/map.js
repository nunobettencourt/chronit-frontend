import * as Type from 'constants/action-types';

export default function map (state = {isFetching: false, url: undefined}, action) {
	switch (action.type) {
		case Type.START_LOCATION_FETCH:
			return {
				isFetching: true,
				url: undefined
			};
		case Type.COMPLETE_LOCATION_FETCH:
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}

}