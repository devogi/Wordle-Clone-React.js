import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
const board = use
    const letter = board[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
}

export default Letter;
