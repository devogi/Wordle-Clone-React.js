import React, { useContext } from "react";
import { AppContext } from "../App";


const letter = board[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
}

export default Letter;
