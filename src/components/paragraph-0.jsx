import React, { Component } from "react";

class Paragraph0 extends Component {
  render() {
    return (
      <h5>
        There are{" "}
        <span className="badge rounded-pill bg-warning">
          {this.props.count}
        </span>{" "}
        movies in the database
      </h5>
    );
  }
}

export default Paragraph0;
