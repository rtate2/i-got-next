import React from 'react';
import moment from 'moment';

import teamData from '../../../helpers/data/teamData';

import Team from '../../shared/Team/Team';

import './Teams.scss';
import NewTeam from '../NewTeam/NewTeam';

class Teams extends React.Component {
  state = {
    teams: [],
    showTeamForm: false,
    time: '',
  };

  componentDidMount() {
    this.getAllTeams();
    this.setState({ time: moment() });
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
    const { time, teams } = this.state;
    const nonWaitlistTeams = teams.filter((team) => team.isWaitlist !== true);

    return (
      <div className="Teams">
        <h1>Teams</h1>
        { this.state.showPlayerForm && <NewTeam addTeam={this.addTeam} /> }
        <div className="items d-flex flex-wrap">
          {nonWaitlistTeams.map((team) => <Team key={team.id} team={team} deleteTeam={this.deleteTeam} time={time} />)}
        </div>
      </div>
    );
  }
}

export default Teams;
