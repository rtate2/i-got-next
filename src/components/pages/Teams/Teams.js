import React from 'react';

import teamData from '../../../helpers/data/teamData';

import Team from '../../shared/Team/Team';

import './Teams.scss';
import NewTeam from '../NewTeam/NewTeam';

class Teams extends React.Component {
  state = {
    teams: [],
    showTeamForm: false,
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

  addTeam = (newTeam) => {
    teamData.createTeam(newTeam)
      .then(() => {
        this.getAllTeams();
        this.setState({ showTeamForm: false });
      })
      .catch((error) => console.error({ error }));
  }

  render() {
    return (
      <div className="Teams">
        <h1>Teams</h1>
        { this.state.showPlayerForm && <NewTeam addTeam={this.addTeam} /> }
        <div className="items d-flex flex-wrap">
          {this.state.teams.map((team) => <Team key={team.id} team={team} deleteTeam={this.deleteTeam} />)}
        </div>
      </div>
    );
  }
}

export default Teams;
