import React, { Component } from "react";
import axios from "axios";
import "./style.css";
var ls = require("local-storage");

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/user/login", user)
      .then(res => {
        console.log(res);
        if (!res.err) {
          ls("email", this.state.email);
          this.props.history.push(`/books/${this.state.email}`);
        }
      })
      .catch(err => {
        alert("authentication failed");
      });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form">
        <div className="form-in">
          <h2>SIGNIN</h2>
          <br />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={this.onChange}
          />
          <br />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={this.onChange}
          />
          <br />
          <button onClick={this.onSubmit} className="button">
            Signin
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
