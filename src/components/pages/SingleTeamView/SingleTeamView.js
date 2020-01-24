import React from 'react';
import { Link } from 'react-router-dom';

import teamData from '../../../helpers/data/teamData';

import './SingleTeamView.scss';

class SingleTeamView extends React.Component {
  state = {
    team: {},
  };

  componentDidMount() {
    const { teamId } = this.props.match.params;
    teamData.getSingleTeam(teamId)
      .then((response) => {
        this.setState({ team: response.data });
      })
      .catch((error) => console.error('error from  get single team', error));
  }

  render() {
    const { teamId } = this.props.match.params;
    const { team } = this.state;

    return (
      <div className="SingleTeamView">
        <h1>Single Team View</h1>
        <div className="card">
          <p>Date: {team.date}</p>
          <p>Time: {team.time}</p>
          <div className="card-body">
            <h4 className="card-title">{team.name}</h4>
            <p>{team.player1}</p>
            <p>{team.player2}</p>
            <p>{team.player3}</p>
            <p>{team.player4}</p>
            <p>{team.player5}</p>
            <Link className="btn btn-primary" to="">Add to Waitlist</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleTeamView;
