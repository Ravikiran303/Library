import React, { Component } from "react";
import axios from "axios";

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
    axios.post("/user/register", user).then(res => {
      alert("Registered successfully");
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form noValidate onClick={this.onSubmit}>
          <input
            name="name"
            placeholder="Enter Full Name"
            type="text"
            onChange={this.onChange}
          />
          <br />
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={this.onChange}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={this.onChange}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
