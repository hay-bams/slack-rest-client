import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useGlobalState } from 'hooks/useGlobalState'; 
import setAxiosHeaders from "helpers/axios";
import holiday from "images/1_Holiday_Marketing_Header_FA_f1a8b2c3-5a04-43e1-a9d1-5627314e8784.png";
import "./login.css";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ state, setState ] = useGlobalState()

  useEffect(() => {

  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    axios
      .post("/login/customer", {
        email,
        password,
      })
      .then((data) => {
        window.localStorage.setItem("auth", JSON.stringify(data.data));
        setState({...state, auth: data.data})

        setAxiosHeaders(data.data.token);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <div className="container">
        <div className="login">
          <form className="form" onSubmit={onSubmit}>
            <div className="shop-login">Shop Matter</div>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="sign-in" label="Sign in" />

            <div className="forgot-password">
              <a href="#">Forgot Password ?</a>
            </div>

            <Link to="/create-account">
              {" "}
              <Button className="create" label="Create Account" />
            </Link>
          </form>
        </div>

        <div className="right">
          <img className="holiday" src={holiday} />
        </div>
      </div>
    </>
  );
};
