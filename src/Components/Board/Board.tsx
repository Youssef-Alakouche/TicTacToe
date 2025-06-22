import type { BoardProps } from "../../Utilities/types";
import calculateWinner from "../../Utilities/calculateWinner";
import { useEffect, useState, useRef } from "react";
import Players from "./Players";

import BoardRows from "./BoardRows";

  // let PlayerXName = "Player X";
  // let PlayerOName = "Player O";

export default function Board({
  xIsNext,
  squares,
  onPlay,
  setWinner,
  checkWinner
}: BoardProps) {
  const [isNamesEdited, setIsNamesEdited] = useState<boolean>(false);
  const PlayerXNameRef = useRef<string>("Player X");
  const PlayerONameRef = useRef<string>("Player O");

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  
  useEffect(() => {
    // Check if the winner should be calculated
    // This is to avoid unnecessary calculations when the game is not over
    // or when the squares haven't changed
    // This also prevents the GameOver overlay from showing up 
    // preventing handleWind in Game to run
    if (!checkWinner) return;
    
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === "X") {
        setWinner(PlayerXNameRef.current);
      } else if (winner === "O") {
        setWinner(PlayerONameRef.current);
      } 
    }
  }, [[...squares]]);

  function handleEditNames(isNamesChanged: boolean, PlayerXName: string, PlayerOName: string) {
    PlayerONameRef.current = PlayerOName.trim();
    PlayerXNameRef.current = PlayerXName.trim();
    setIsNamesEdited(isNamesChanged);
  }

  return (
    <>
      <Players xIsNext={xIsNext} onNamesChanged={handleEditNames} />

      <BoardRows squares={squares} handleClick={handleClick}>
        <div className={`${isNamesEdited ? "hidden" : ""} absolute top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center`} >
          <div className="absolute inset-0 bg-gray-600/40 blur-md"></div>

          <div className="relative text-white text-2xl font-bold z-10 select-none">
            Edit Names
          </div>
        </div>
      </BoardRows>
    </>
  );
}
