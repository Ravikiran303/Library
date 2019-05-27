import React, { Component } from "react";
import axios from "axios";

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
    axios.post("/user/login", user).then(res => {
      alert("Login successfully");
    });
  };
  render() {
    return (
      <div className="form">
        <form noValidate onSubmit={this.onSubmit} className="form-in">
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
          <button className="button">Signin</button>
        </form>
      </div>
    );
  }
}

export default Login;
