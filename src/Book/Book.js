import React, { Component } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class Book extends Component {
  checkout = props => {
    axios.put(`/books/${this.props.book._id}/checkout`).then(response => {
      alert("Check out successfully");
    });
  };
  render() {
    return (
      <div className="book">
        <NavLink exact to={`/bookdetails/${this.props.book.title}`}>
          <img src={this.props.book.image} alt="" className="image" />
        </NavLink>

        <div className="details">
          {this.props.book.title}
          <button className="button-error pure-button" onClick={this.checkout}>
            CheckOut
          </button>
          <br />
          {this.props.book.author}
          <br />
          {this.props.book.description}
        </div>
      </div>
    );
  }
}

export default Book;
