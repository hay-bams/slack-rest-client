import React, { useContext, useEffect } from "react";
import axios from "axios";
import decode from 'jwt-decode';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { Home } from "pages/Home";
import { Register } from "pages/Register";
import { Login } from "pages/Login";
import { CreateTeam } from "pages/CreateTeam";
import { ViewTeam } from "pages/ViewTeam";
import { AppContext } from "components/AppProvider";

axios.defaults.baseURL = "http://localhost:3010";

const token = window.localStorage.getItem("token");
const refreshToken = window.localStorage.getItem("refreshToken");

if (token && refreshToken) {
  axios.defaults.headers.common["x-token"] = token;
  axios.defaults.headers.common["x-refresh-token"] = refreshToken;
} 

const isAuthenticated = () => {
  try {
    decode(token)
  } catch(err) {
    return false
  }
  return true
}

const Notfound = () => <h1>Not found</h1>;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
);

const Routes = () => {
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setState({
      ...state,
      token,
      refreshToken
    });
  }, [token, refreshToken]);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/view-team" component={ViewTeam} />
          <PrivateRoute exact path="/create-team" component={CreateTeam} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
