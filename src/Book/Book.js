import React, { Component } from "react";
import "./style.css";

export class Book extends Component {
  render() {
    return (
      <div className="book">
        <img src={this.props.image} className="image" alt="" />
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
