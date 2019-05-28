import React, { Component } from "react";
import "./style.css";
import axios from "axios";
var ls = require("local-storage");

export class Book extends Component {
  checkout = props => {
    const email = ls.get("email");
    console.log(email);
    axios
      .put(`/books/${this.props.book._id}/checkout/${email}`)
      .then(response => {
        this.props.removeBook(this.props.book._id);
      });
  };

  render() {
    return (
      <div className="book">
        {/* <NavLink exact to={`/bookdetails/${this.props.book.title}`}> 
        </NavLink> */}
        <img src={this.props.book.image} alt="" className="image" />
        <div className="details">
          {this.props.book.title}
          <br />
          {this.props.book.author}
          <br />
          {this.props.book.description}
          <button className="button-error" onClick={this.checkout}>
            CheckOut
          </button>
        </div>
      </div>
    );
  }
}

export default Book;
