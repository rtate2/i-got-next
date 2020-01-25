import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import teamShape from '../../../helpers/propz/teamShape';

import './Team.scss';

class Team extends React.Component {
  static propType = {
    team: teamShape.teamShape,
    deleteTeam: PropTypes.func,
  }

  deleteTeamEvent = (e) => {
    e.preventDefault();
    const { deleteTeam, team } = this.props;
    deleteTeam(team.id);
  }

  render() {
    const { team } = this.props;

    return (
      <div className="Team col-4 mb-3">
        <div className="card">
          <button type="button" className=" btn btn-link d-flex justify-content-end" aria-label="Close" onClick={this.deleteTeamEvent}>&times;</button>
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
