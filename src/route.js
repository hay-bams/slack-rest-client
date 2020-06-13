import React, { useContext, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Signin } from "components/Signin";
import { Home } from "components/Home";
import { CreateAccount } from "components/create-account";
import { AppContext } from "components/AppProvider";

axios.defaults.baseURL = "http://localhost:3010";

const auth = window.localStorage.getItem("auth");
if (auth) {
  axios.defaults.headers.common["Authorization"] = auth.token;
}

const Notfound = () => <h1>Not found</h1>;

const Routes = () => {
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setState({
      ...state,
      auth: JSON.parse(auth),
    });
  }, [auth]);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
