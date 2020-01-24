import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import NewTeam from '../components/pages/NewTeam/NewTeam';
import Teams from '../components/pages/Teams/Teams';
import Waitlist from '../components/pages/Waitlist/Waitlist';
import AvailablePlayers from '../components/pages/AvailablePlayers/AvailablePlayers';
import SingleTeamView from '../components/pages/SingleTeamView/SingleTeamView';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/teams/new" exact component={NewTeam} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/waitlist" exact component={Waitlist} />
          <Route path="/availableplayers" exact component={AvailablePlayers} />
          <Route path="/teams/:teamId" exact component={SingleTeamView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
