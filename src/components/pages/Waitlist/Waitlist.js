import React from 'react';
import moment from 'moment';

import './Waitlist.scss';

import teamData from '../../../helpers/data/teamData';
import Team from '../../shared/Team/Team';

class Waitlist extends React.Component {
  state = {
    teams: [],
    isWaitListView: false,
  }

  componentDidMount() {
    this.getAllTeams();
  }

  getAllTeams = () => {
    teamData.getTeams()
      .then((teams) => this.setState({ teams, isWaitListView: true }))
      .catch((error) => console.error('error from get teams for waitlist', error));
  }

  deleteTeam = (teamId) => {
    teamData.deleteTeam(teamId)
      .then(() => this.getAllTeams())
      .catch((error) => console.error('error deleting team', error));
  }

  render() {
    const { teams, isWaitListView } = this.state;
    const waitlistTeams = teams.filter((team) => team.isWaitlist !== false);
    const sortedTeams = waitlistTeams.sort((a, b) => {
      const aDate = moment(a.date);
      const bDate = moment(b.date);
      if (aDate.isBefore(bDate)) {
        return -1;
      }
      if (bDate.isBefore(aDate)) {
        return 1;
      }
      return 0;
    });

    return (
      <div className="Waitlist">
        <h1>Waiting List</h1>
        <div className="items d-flex flex-wrap">
          {sortedTeams.map((team) => <Team key={team.id} team={team} deleteTeam={this.deleteTeam} isWaitListView={isWaitListView} />)}
        </div>
      </div>
    );
  }
}

export default Waitlist;
