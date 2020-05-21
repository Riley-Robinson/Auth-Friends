import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/login";
import FriendsList from "./components/createFriend";
import PrivateRoute from "./authorization/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <div className="boxes">
            <h2>The Gangs All Here. . .</h2>
            <PrivateRoute path="/protected" component={FriendsList} />
          </div>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;