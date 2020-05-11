import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const context = useContext(GlobalContext);
  const { addUser } = useContext(GlobalContext);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  );

  const formSubmit = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case "username":
        context.users.map((user) => {
          errors.username =
            user.username === username ? "username already exists" : "";
        });
        break;

      case "email":
        errors.email = validEmailRegex.test(value) ? "Invalid email" : "";
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;

      case "confirmpassword":
        errors.confirmpassword =
          confirmpassword !== password ? "Password does not match" : "";
        break;
      default:
        break;
    }

    setErrors({ errors, [name]: value }, () => {
      console.log(errors);
    });

    confirmRegister();
  };

  const confirmRegister = () => {
    //Creating a new User
    const newUser = {
      id: Math.floor(Math.random() * 100),
      username,
      password,
    };

    context.users.map((u) => {
      if (u.username !== username && u.email !== email) {
        if (password === confirmpassword) {
          //Adding a new user
          addUser(newUser);
          console.log(context.users);
          props.history.push("/login");
        }
      } else {
        setEmail("");
        setPassword("");
        setUsername("");
        setconfirmPassword("");
        props.history.push("/register");
      }
    });
  };

  return (
    <React.Fragment>
      <Router>
        <div>
          <h3>Register</h3>
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
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
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
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmpassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Confirm password"
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
              Register
            </button>
            <p className="forgot-password text-right">
              Already a user ? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Register;
