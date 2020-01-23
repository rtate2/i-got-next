import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <MyNavbar />
          <Switch>
            <Route path="/home" exact component={Home} />
            {/* <Route path="/stuff/new" exact component={NewStuff} />
            <Route path="/stuff" exact component={MyStuff} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/stuff/12345/edit" exact component={EditButton} />
            <Route path="/stuff/:itemId" exact component={SingleButton} /> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
