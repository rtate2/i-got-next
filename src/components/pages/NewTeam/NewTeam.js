import React from 'react';

import teamData from '../../../helpers/data/teamData';
import playerData from '../../../helpers/data/playerData';

import './NewTeam.scss';

class NewTeam extends React.Component {
  state = {
    name: '',
    date: '',
    time: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    isWaitlist: false,
    players: [],
  }

  componentDidMount() {
    playerData.getPlayers()
      .then((players) => this.setState({ players }))
      .catch((error) => console.error('error from players', error));
  }

  saveTeamEvent = (e) => {
    e.preventDefault();
    const newTeam = {
      name: this.state.name,
      date: '',
      time: this.state.time,
      player1: this.state.player1,
      player2: this.state.player2,
      player3: this.state.player3,
      player4: this.state.player4,
      player5: this.state.player5,
      isWaitlist: this.state.isWaitlist,
    };
    teamData.createTeam(newTeam)
      .then(() => {
        this.props.history.push('/teams');
        this.setState({
          name: '', player1: '', player2: '', player3: '', player4: '', player5: '',
        });
      });
    this.setState({
      name: '', player1: '', player2: '', player3: '', player4: '', player5: '',
    });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  player1Change = (e) => {
    this.setState({ player1: e.target.value });
  }

  player2Change = (e) => {
    this.setState({ player2: e.target.value });
  }

  player3Change = (e) => {
    this.setState({ player3: e.target.value });
  }

  player4Change = (e) => {
    this.setState({ player4: e.target.value });
  }

  player5Change = (e) => {
    this.setState({ player5: e.target.value });
  }

  renderPlayerOptions = () => this.state.players.map((player) => {
    const name = `${player.firsName} ${player.lastName}`;
    if (name !== this.state.player1 || name !== this.state.player2 || name !== this.state.player3 || name !== this.state.player4 || name !== this.state.player5) {
      return ((<option key={player.id} id={player.id}>{player.firstName} {player.lastName}</option>));
    }
    return null;
  })

  render() {
    return (
      <div className="NewTeam">
        <h1>New Team Form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="team-name">Team Name</label>
            <input
              type="text"
              className="form-control"
              id="team-name"
              placeholder="Enter Team Name"
              value={this.state.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-name">Player Names</label>
            <select
            className="form-control"
            id="player-name"
            value={this.state.player1}
            onChange={this.player1Change}>
              <option>Select Player 1</option>
              { this.renderPlayerOptions() }
            </select>
          </div>
          <div className="form-group">
          <select
            className="form-control"
            id="player-name"
            value={this.state.player2}
            onChange={this.player2Change}>
              <option>Select Player 2</option>
              { this.renderPlayerOptions() }
            </select>
          </div>
          <div className="form-group">
            <select
            className="form-control"
            id="player-name"
            value={this.state.player3}
            onChange={this.player3Change}>
              <option>Select Player 3</option>
              { this.renderPlayerOptions() }
            </select>
          </div>
          <div className="form-group">
            <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={this.state.player4}
            onChange={this.player4Change}>
              <option>Select Player 4</option>
              { this.renderPlayerOptions() }
            </select>
          </div>
          <div className="form-group">
            <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={this.state.player5}
            onChange={this.player5Change}>
              <option>Select Player 5</option>
              { this.renderPlayerOptions() }
            </select>
          </div>
          <button className="btn btn-primary" onClick={this.saveTeamEvent}>Save Team</button>
        </form>
      </div>
    );
  }
}

export default NewTeam;
