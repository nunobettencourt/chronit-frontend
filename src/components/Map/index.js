import React, { Component, PropTypes } from 'react';

class Map extends Component {

    componentWillMount() {
        // const {fetchLocation} = this.props;
				//
        // fetchLocation();

    }

    render() {
        const {fetchLocation, map} = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>My location is: <span className="badge">{map.url}</span></p>
                    <div className="btn-group">
                        <button className="btn btn-default" onClick={fetchLocation}>fetch location</button>
                    </div>
                </div>
            </div>
        );
    }
}

Map.propTypes = {
    fetchLocation:          PropTypes.func.isRequired,
};

export default Map;
