import React, { Component } from 'react';
import { Link } from 'react-router';
import { styles } from './styles.scss';


export class Header extends Component {
    render() {
        return (
            <nav className={`${styles} navbar navbar-inverse navbar-fixed-top`}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Simple Redux Boilerplate</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" activeClassName="active">About</Link>
                            </li>
                            <li>
                                <Link to="/event" activeClassName="active">Event</Link>
                            </li>
                            <li>
                                <Link to="/map" activeClassName="active">Map</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
