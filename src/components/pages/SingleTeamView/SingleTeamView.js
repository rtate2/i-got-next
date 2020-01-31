import React from 'react';

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

  addToWaitlist = (e) => {
    e.preventDefault();
    const { teamId } = this.props.match.params;
    const { team } = this.state;
    const waitlistTeam = {
      name: team.name,
      time: team.time,
      player1: team.player1,
      date: team.date,
      player2: team.player2,
      player3: team.player3,
      player4: team.player4,
      player5: team.player5,
      isWaitlist: true,
    };
    teamData.WaitlistTeam(teamId, waitlistTeam)
      .then(() => this.props.history.push('/waitlist'))
      .catch((error) => console.error('error from edit team', error));
  };

  removeFromWaitlist = (e) => {
    e.preventDefault();
    const { teamId } = this.props.match.params;
    const { team } = this.state;
    const waitlistTeam = {
      name: team.name,
      time: team.time,
      player1: team.player1,
      date: new Date(),
      player2: team.player2,
      player3: team.player3,
      player4: team.player4,
      player5: team.player5,
      isWaitlist: false,
    };
    teamData.WaitlistTeam(teamId, waitlistTeam)
      .then(() => this.props.history.push('/teams'))
      .catch((error) => console.error('error from edit team', error));
  };

  buildButtons = () => {
    if (this.state.team.isWaitlist === false) {
      return <button className="btn btn-primary" onClick={this.addToWaitlist}>Add to Waitlist</button>;
    }
    return <button className="btn btn-primary" onClick={this.removeFromWaitlist}>Remove From Waitlist</button>;
  }

  render() {
    const { team } = this.state;

    return (
      <div className="SingleTeamView">
        <h1>Single Team View</h1>
        <div className="card">
          {/* <p>Date: {team.date}</p> */}
          <div className="card-body">
            <h4 className="card-title">{team.name}</h4>
            <p>{team.player1}</p>
            <p>{team.player2}</p>
            <p>{team.player3}</p>
            <p>{team.player4}</p>
            <p>{team.player5}</p>
            {this.buildButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleTeamView;

// this.setState({ isWaitlist: true });

// componentDidMount() {
//   const { teamId } = this.props.match.params;
//   if (teamId) {
//     teamData.getSingleTeam(teamId)
//       .then((response) => {
//         this.setState({ team: response.data, isWaitlist: true });
//       })
//       .catch((error) => console.error('error from  get single team', error));
//   }
// }
