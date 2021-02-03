import React from "react";

const Delete = (props) => {
  return (
    <button className="btn btn-danger btn-sm" onClick={props.onDelete}>
      Delete
    </button>
  );
};

export default Delete;
