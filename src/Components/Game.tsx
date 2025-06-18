import { useState } from "react";
import type { snapshotsType, squaresType } from "../Utilities/types";
import Board from "./Board/Board";
import Moves from "./Moves";
import GameWinnerOverlay from "./GameWinnerOverlay";

export default function Game() {
 // Game history - array of board states (snapshots of squares)
 const [snapshots, setSnapshots] = useState<snapshotsType>([
   Array(9).fill(null),
 ]);
 
 // Current position in game history (which move we're viewing)
 const [currentMove, setCurrentMove] = useState<number>(0);
 
 // Winner of the game (X, O, or null if no winner yet)
 const [winner, setWinner] = useState<string | null>(null);
 
 // Controls visibility of winner overlay dialog
 const [isOpen, setIsOpen] = useState<boolean>(false);

 // Determine whose turn it is based on move number (even = X, odd = O)
 const xIsNext = currentMove % 2 === 0;
 
 // Get the current board state from history
 const currentSquares = snapshots[currentMove];

 // Handle a player making a move
 function handlePlay(nextSquares: squaresType) {
   // Create new history up to current move + new move (removes future history if we're in the past)
   const nextHistory = [...snapshots.slice(0, currentMove + 1), nextSquares];
   setSnapshots(nextHistory);
   // Jump to the latest move
   setCurrentMove(nextHistory.length - 1);
 }

 // Navigate to a specific move in history
 function jumpTo(nextMove: number) {
   setCurrentMove(nextMove);
 }

 // Reset game to initial state
 function PlayAgainHandler(){
   setSnapshots([Array(9).fill(null)]);
   setCurrentMove(0);
   setWinner(null);
   setIsOpen(false);
 }

 // Close winner overlay and reset winner state
 // give the player a chance to browse the history
 function handlerCloseOverlay() {
   setIsOpen(false);
   setWinner(null);
 }

 // Called when game is over - shows winner overlay
 function handleWin(winner: string | null) {
   setWinner(winner);
   setIsOpen(true);
 }

 return (
   <>
   {/* Winner announcement overlay dialog */}
   <GameWinnerOverlay isOpen={isOpen} onClose={handlerCloseOverlay} winner={winner || ""} onPlayAgain={PlayAgainHandler} />
   
   {/* Main game container */}
   <div className="flex flex-col items-center justify-center min-h-screen ">
     {/* Game board container */}
     <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded shadow-lg">
       <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} setWinner={handleWin} />
     </div>
   
   {/* Move history component */}
   <Moves snapshots={snapshots} jumpTo={jumpTo} />
   </div>
   </>
 );
}