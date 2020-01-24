import React from 'react';
import { Link } from 'react-router-dom';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">I Got Next</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/waitlist">Waitlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/availableplayers">Available Players</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
