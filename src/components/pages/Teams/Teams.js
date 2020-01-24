import React from 'react';

import teamData from '../../../helpers/data/teamData';

import Team from '../../shared/Team/Team';

import './Teams.scss';

class Teams extends React.Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    teamData.getTeams()
      .then((teams) => this.setState({ teams }))
      .catch((error) => console.error('error from teams', error));
  }

  render() {
    return (
      <div className="Teams">
        <h1>Teams</h1>
        <div className="items d-flex flex-wrap">
          {this.state.teams.map((team) => <Team key={team.id} team={team} />)}
        </div>
      </div>
    );
  }
}

export default Teams;
