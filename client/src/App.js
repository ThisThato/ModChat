import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import UserList from "./components/UserList";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              modXchat.io
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/chat"}>
                    Chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
        </div>
        <UserList />
      </Router>
    </GlobalProvider>
  );
}

export default App;
