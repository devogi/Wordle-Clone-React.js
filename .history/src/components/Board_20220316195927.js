import React, { useState } from "react";
import { boardDefault } from "../Words";

function Board() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className='board' >
    <div className='row' >
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
    </div>
    <div className='row' >
        <Letter letterPos={0} attemptVal={} />
        <Letter letterPos={1} attemptVal={} />
        <Letter letterPos={2} attemptVal={} />
        <Letter letterPos={3} attemptVal={} />
        <Letter letterPos={4} attemptVal={} />
    </div>
    <div className='row' >
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
    </div>
    <div className='row' >
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
    </div>
    <div className='row' >
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
    </div>
    <div className='row' >
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
    </div>
    
</div>
  )
}

export default Board;
