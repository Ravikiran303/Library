import React, { Component } from "react";
import Book from "../Book/Book";
import "./style.css";

export class Books extends Component {
  render() {
    return (
      <div className="books">
        <Book
          image="https://images-na.ssl-images-amazon.com/images/I/91WJQeRImJL.jpg"
          title="Super Heros"
          author="Ravi"
          description="about SuperHeros"
        />
        <Book
          image="https://pictures.abebooks.com/PRINTMATTERS/18446485333_5.jpg"
          title="Black Cat"
          author="Ravi"
          description="........."
        />
        <Book
          image="https://imgix.ranker.com/user_node_img/104/2075534/original/spider-man-photo-u76?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
          title="Spiderman"
          author="Ravi"
          description="........."
        />
      </div>
    );
  }
}

export default Books;
