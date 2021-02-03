import React, { Component } from "react";
import Like from "./like";
import Delete from "./delete";

class Table extends Component {
  renderSortIcon = (nameOfColumn) => {
    if (nameOfColumn !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSorting("title")}
            >
              Title {this.renderSortIcon("title")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSorting("genre.name")}
            >
              Genre {this.renderSortIcon("genre.name")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSorting("numberInStock")}
            >
              Stock {this.renderSortIcon("numberInStock")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSorting("dailyRentalRate")}
            >
              Rate {this.renderSortIcon("dailyRentalRate")}
            </th>
            <th />
            <th />
          </tr>
        </thead>

        <tbody>
          {this.props.arrMovies.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLiked={() => this.props.onLiked(movie)}
                  />
                </td>
                <td>
                  <Delete onDelete={() => this.props.onDelete(movie)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
