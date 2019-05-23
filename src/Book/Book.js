import React, { Component } from "react";
import "./style.css";

export class Book extends Component {
  selectBook() {
    console.log("selected Book");
  }
  render() {
    return (
      <div className="book">
        <img
          src={this.props.image}
          className="image"
          alt=""
          onClick={this.selectBook}
        />
        <label className="text">
          Title:{this.props.title}
          <br />
          Author:{this.props.author}
          <br />
          Description:{this.props.description}
        </label>
      </div>
    );
  }
}

export default Book;
