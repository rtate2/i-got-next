import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import teamShape from '../../../helpers/propz/teamShape';

import './Team.scss';


class Team extends React.Component {
  static propType = {
    team: teamShape.teamShape,
    deleteTeam: PropTypes.func,
    isWaitlist: PropTypes.bool,
  }

  deleteTeamEvent = (e) => {
    e.preventDefault();
    const { deleteTeam, team } = this.props;
    deleteTeam(team.id);
  }

  render() {
    const { team, isWaitListView } = this.props;

    return (
      <div className="Team col-4 mb-5">
        <div className="card teamCard">
          <button type="button" className=" btn btn-link d-flex justify-content-end deleteButton" aria-label="Close" onClick={this.deleteTeamEvent}>&times;</button>
          {isWaitListView && <p>Date: {moment(team.date).format('dddd, MMMM Do YYYY')}</p>}
          {isWaitListView && <p>Time: {moment(team.time).format('h:mm:ss a')}</p>}
          <div className="card-body">
            <h4 className="card-title">{team.name}</h4>
            <Link className="btn btn-outline-dark teamBtn" to={`/teams/${team.id}`}>View Team</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
