import React, { Component } from "react";
import "./style.css";

export class Book extends Component {
  selectBook = props => {
    console.log("selected Book " + props.title);
  };
  renderList() {
    return this.props.list.map((book, index) => {
      return (
        <div className="book" key={index}>
          <img
            src={book.image}
            alt=""
            className="image"
            onClick={this.selectBook}
          />
          <label>
            {book.title}
            <br />
            {book.author}
            <br />
            {book.description}
          </label>
        </div>
      );
    });
  }
  render() {
    return <div className="books">{this.renderList()}</div>;
  }
}

export default Book;
