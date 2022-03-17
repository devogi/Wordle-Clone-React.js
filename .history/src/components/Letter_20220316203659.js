import React,  from "react";
import Board from "./Board";

function Letter({ letterPos, attemptVal }) {
    const letter = board[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
}

export default Letter;
