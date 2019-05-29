import React, { Component } from "react";
import Book from "../Book/Book";
import "./style.css";

import axios from "axios";

export class Books extends Component {
  state = { books_: [] };
  removeBook = id => {
    var filtered = this.state.books_.filter(function(book, index, arr) {
      return book._id !== id;
    });
    console.log(filtered);
    this.setState({ books_: filtered });
  };
  componentDidMount = () => {
    axios
      .get("/books")
      .then(response => {
        const books_ = response.data;
        //console.log(books_);
        this.setState({ books_ });
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
  render() {
    return (
      <div className="books">
        {this.state.books_.map((book, i) => (
          <Book book={book} removeBook={this.removeBook} key={i} />
        ))}
      </div>
    );
  }
}

export default Books;
