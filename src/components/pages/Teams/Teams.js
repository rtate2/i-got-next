import React from 'react';

import teamData from '../../../helpers/data/teamData';

import Team from '../../shared/Team/Team';

import './Teams.scss';

class Teams extends React.Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    this.getAllTeams();
  }

  getAllTeams = () => {
    teamData.getTeams()
      .then((teams) => this.setState({ teams }))
      .catch((error) => console.error('error from teams', error));
  }

  deleteTeam = (teamId) => {
    teamData.deleteTeam(teamId)
      .then(() => this.getAllTeams())
      .catch((error) => console.error('error deleting team', error));
  }

  render() {
    return (
      <div className="Teams">
        <h1>Teams</h1>
        <div className="items d-flex flex-wrap">
          {this.state.teams.map((team) => <Team key={team.id} team={team} deleteTeam={this.deleteTeam} />)}
        </div>
      </div>
    );
  }
}

export default Teams;
