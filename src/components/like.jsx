import React from "react";

const Like = (props) => {
  let value = "fa fa-heart";
  if (props.liked !== true) value += "-o";
  return (
    <i
      className={value}
      aria-hidden="true"
      onClick={props.onLiked}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
