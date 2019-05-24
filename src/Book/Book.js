import React, { Component } from "react";

import "./style.css";

export class Book extends Component {
  selectBook = props => {
    console.log("selected Book " + this.props.book.title);
  };

  render() {
    return (
      <div className="book">
        <img
          src={this.props.book.image}
          alt=""
          className="image"
          onClick={this.selectBook}
        />
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
