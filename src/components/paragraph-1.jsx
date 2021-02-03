import React, { Component } from "react";

class Paragraph1 extends Component {
  render() {
    return (
      <h5>
        Showing{" "}
        <span className="badge rounded-pill bg-warning">
          {this.props.count}
        </span>{" "}
        movies in the database
      </h5>
    );
  }
}

export default Paragraph1;
