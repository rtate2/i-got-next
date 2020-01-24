import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link className="btn btn-primary" to="">Join Team</Link>
        <Link className="btn btn-secondary" to="/teams/new">We have our Team</Link>
      </div>
    );
  }
}

export default Home;
