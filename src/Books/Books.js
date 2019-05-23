import React, { Component } from "react";
import Book from "../Book/Book";

export class Books extends Component {
  render() {
    return (
      <div>
        <Book
          image="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg"
          title="Comic"
          author="Ravi"
          description="about SuperHeros"
        />
        <Book
          image="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg"
          title="Comic"
          author="Ravi"
          description="about SuperHeros"
        />
        <Book
          image="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg"
          title="Comic"
          author="Ravi"
          description="about SuperHeros"
        />
      </div>
    );
  }
}

export default Books;
