import React from 'react';
import { Link } from 'react-router-dom';

import teamShape from '../../../helpers/propz/teamShape';

import './Team.scss';

class Team extends React.Component {
  static propType = {
    team: teamShape.teamShape,
  }

  render() {
    const { team } = this.props;

    return (
      <div className="Team col-4 mb-3">
        <div className="card">
          <p>Date: {team.date}</p>
          <p>Time: {team.time}</p>
          <div className="card-body">
            <h4 className="card-title">{team.name}</h4>
            <Link className="btn btn-primary" to={`/teams/${team.id}`}>View Team</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
