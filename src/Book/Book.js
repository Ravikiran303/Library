import React, { Component } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export class Book extends Component {
  sendDetails = props => {
    console.log(this.props.book);
  };
  render() {
    return (
      <div className="book">
        <NavLink exact to="/BookDetails" details={this.props.book}>
          <img
            src={this.props.book.image}
            alt=""
            onClick={this.sendDetails}
            className="image"
          />
        </NavLink>

        <label>
          {this.props.book.title}
          <br />
          {this.props.book.author}
          <br />
          {this.props.book.description}
        </label>
      </div>
    );
  }
}

export default Book;
