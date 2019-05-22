import React, { Component } from "react";

export class Book extends Component {
  render() {
    return (
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg" />
        <label>Title:</label>
        <label>Author:</label>
        <label>Description:</label>
      </div>
    );
  }
}

export default Book;
