import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onSubmit = e => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/user/register", user)
      .then(res => {
        if (res.status === 200) {
          alert("Registration fsuccess");
        }
      })
      .catch(err => {
        alert("Registration failed");
      });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <div className="form-in">
          <h2>REGISTER</h2>
          <input
            className="input"
            name="name"
            placeholder="Enter Full Name"
            type="text"
            onChange={this.onChange}
          />
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
          <button className="button" onClick={this.onSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
