import React from "react";

//input like: boolean
//input onClick: function
const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer", color: "red" }}
      onClick={props.onClick}
    />
  );
};

export default Like;
