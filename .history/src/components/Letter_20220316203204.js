import React from "react";
import Board from "./Board";

function Letter({ letterPos, attemptVal }) {
    const letter = Board[attemptVal][letterPos];
  return <div className="letter">Letter</div>;
}

export default Letter;
