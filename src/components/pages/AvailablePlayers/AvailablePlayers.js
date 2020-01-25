import React from 'react';

import playerData from '../../../helpers/data/playerData';
import Player from '../../shared/Player/Player';

import './AvailablePlayers.scss';

class AvailablePlayers extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayers()
      .then((players) => this.setState({ players }))
      .catch((error) => console.error('error from players', error));
  }

  render() {
    return (
      <div className="AvailablePlayers">
        <h1>Available Players</h1>
        <div className="d-flex flex-wrap">
          {this.state.players.map((player) => <Player key={player.id} player={player} />)}
        </div>
      </div>
    );
  }
}

export default AvailablePlayers;
