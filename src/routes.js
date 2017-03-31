import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { About } from 'containers/About';
import { Event } from 'containers/Event';
import { Map } from 'containers/Map';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
				<Route path="map" component={Map} />
				<Route path="event" component={Event} />
        <Route path="about" component={About} />
        <Route status={404} path="*" component={Home} />
    </Route>
);
