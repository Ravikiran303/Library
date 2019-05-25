import React, { Component } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export class Book extends Component {
  sendDetails = props => {
    //console.log(this.props.book);
  };
  render() {
    return (
      <div className="book">
        <NavLink exact to={`/bookdetails/${this.props.book.title}`}>
          <img
            src={this.props.book.image}
            alt=""
            onClick={this.sendDetails}
            className="image"
          />
        </NavLink>

        <div className="details">
          {this.props.book.title}
          <button className="button-error pure-button">CheckOut</button>
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
