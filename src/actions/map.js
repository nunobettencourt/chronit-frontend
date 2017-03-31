import * as Type from 'constants/action-types';
import axios from 'axios';

export function startLocationFetch() {
    return {
        type: Type.START_LOCATION_FETCH
    };
};

export function completeLocationFetch(url) {
    return {
        type: Type.COMPLETE_LOCATION_FETCH,
        url
    };
};

export function fetchLocation() {
    return dispatch => {
        startLocationFetch();

        axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc;
            var baseUrl = 'http://maps.google.com?q=';
            dispatch(completeLocationFetch(baseUrl + loc));
        });
    };
};