import React, { Component } from 'react';
import { styles } from './styles.scss';
import EventList from 'components/EventList';


export class EventSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Event Page</h2>
                </div>
                <EventList {...this.props} />
            </div>
        );
    }
}
