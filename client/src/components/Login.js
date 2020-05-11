import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("");

  const context = useContext(GlobalContext);

  const formSubmit = (e) => {
    e.preventDefault();

    confirmUser();
  };

  const confirmUser = () => {
    context.users.map((user) => {
      if (user.username === username && user.password === password)
        props.history.push("/chat");
      else {
        setUsername("Invalid Username");
        props.history.push("/login");
      }
    });
  };

  return (
    <React.Fragment>
      <Router>
        <div>
          <h3>Sign in</h3>
          <form onSubmit={formSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label>Room</label>
              <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="form-control"
                placeholder="Enter Room"
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              id="btnLogin"
              className="btn btnLogin btn-block"
            >
              Login
            </button>

            <p className="forgot-password text-right">
              Don't have an account ? <Link to={`/register`}>Register</Link>
            </p>
          </form>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Login;
