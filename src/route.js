import React, { useContext, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "components/Home";
import { Register } from "components/Register";
import { Login } from "components/Login";
import { CreateTeam } from "components/CreateTeam";
import { AppContext } from "components/AppProvider";

axios.defaults.baseURL = "http://localhost:3010";

const token = window.localStorage.getItem("token");
const refreshToken = window.localStorage.getItem("refreshToken");
if (token && refreshToken) {
  axios.defaults.headers.common["x-token"] = token;
  axios.defaults.headers.common["x-refresh-token"] = refreshToken;
} 

const Notfound = () => <h1>Not found</h1>;

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
          <Route exact path="/create-team" component={CreateTeam} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
