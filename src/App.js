import './App.css';
// import React, { useState, useEffect } from 'react';
// import Friend from './components/Friend/Friend';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';
function App() {

  // const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => setFriends(data))
  // }, [])
  return (
    <div>
      {/* <h4>Friends : {friends.length}</h4>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      } */}

      {/* self closing tag */}
      {/* <Home /> */}

      <Router>
        <Switch>
          <Route path='/home'>
            <Home> </Home>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
