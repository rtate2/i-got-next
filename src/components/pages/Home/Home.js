import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container home2">
        <h1>I Got Next!</h1>
        <Link className="btn btn-outline-dark btn-large hey" to="/teams/new">We have our Team</Link>
        </div>
      </div>
    );
  }
}

export default Home;
