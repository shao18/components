import "BoardCell/css/index.css";
import React from "react";

function BoardCell(props) {
  return (
    <td
      className={`board__cell${
        props.color ? ` board__cell_color_${props.color}` : ""
      }`}
    >
      {props.children}
    </td>
  );
}

export default BoardCell;
