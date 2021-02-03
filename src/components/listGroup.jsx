import React from "react";

const ListGroup = (props) => {
  return (
    <ul className="list-group">
      {props.genreName.map((genre) => (
        <li
          key={genre._id}
          style={{ cursor: "pointer" }}
          className={
            genre === props.selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onClickGenreSelect(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
