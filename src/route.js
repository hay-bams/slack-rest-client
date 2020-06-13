import React, { useContext, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "components/Home";
import { Register } from "components/Register";
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
          <Route exact path="/register" component={Register} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
