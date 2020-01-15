import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Login } from "./containers/login";
import { Dashboard } from "./containers/dashboard";
import Guard from "./utils/ProtectedRoute.route"

function App() {
  return (
    <main>
      <Switch>
        <Route exact path = "/login" component  = { Login } />
        <Guard exact path = "/dashboard" component  = { Dashboard } />
        <Route path = "*" component = { Login } ></Route>
      </Switch>
    </main>
  );
}

export default App;
