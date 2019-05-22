import React, { Component } from "react";
import "./style.css";

export class Book extends Component {
  render() {
    return (
      <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg"
          className="image"
        />
        <label>Title:</label>
        <label>Author:</label>
        <label>Description:</label>
      </div>
    );
  }
}

export default Book;
