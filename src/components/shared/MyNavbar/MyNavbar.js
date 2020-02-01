import React from 'react';
import { Link } from 'react-router-dom';

import './MyNavbar.scss';
import image1 from '../../../images/I-got-next.png';

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navvy">
        <Link className="navbar-brand" to="/home">
        <img src={image1} className="logo-image" alt="" />
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" id="navvy-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navvy-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navvy-link" to="/waitlist">Waitlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navvy-link" to="/availableplayers">Available Players</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
