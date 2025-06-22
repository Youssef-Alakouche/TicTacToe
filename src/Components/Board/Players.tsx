import { useState, useEffect } from "react";

import Player from "./Player";

// let playerSymbol: ["X", "O"] = ["X", "O"];

export default function Players({
  xIsNext,
  onNamesChanged,
}: {
  xIsNext: boolean;
  onNamesChanged: (isNamesChanged: boolean, PlayerXName: string, PlayerOName: string) => void;
}) {
  // const [players, setPlayers] = useState({
  //   XPlayer: { name: "Player X", isEditing: false },
  //   OPlayer: { name: "Player O", isEditing: false },
  // });

  const [playersNames, setPlayersNames] = useState({
    XPlayer: "Player X",
    OPlayer: "Player O",
  });

useEffect(() => {
    // console.log(players.XPlayer.name);
    // console.log(players.OPlayer.name);
    console.log(playersNames.XPlayer);
    console.log(playersNames.OPlayer);
  if (
    playersNames.OPlayer != "Player O" &&
    playersNames.XPlayer != "Player X" &&
    playersNames.OPlayer != playersNames.XPlayer &&
    playersNames.OPlayer.trim() !== "" &&
    playersNames.XPlayer.trim() !== ""
  ) {
    onNamesChanged(true, playersNames.XPlayer, playersNames.OPlayer);
  } else {
    onNamesChanged(false, "Player X", "Player O");
  }
}, [playersNames.OPlayer, playersNames.XPlayer]);

function handleEditing() {
  // if( !(playersNames.OPlayer === "Player O" || playersNames.XPlayer === "Player X")) 
  //   setPlayersNames({XPlayer: "Player X", OPlayer: "Player O"});
  onNamesChanged(false, playersNames.XPlayer, playersNames.OPlayer);
}

  return (
    <ol className="flex w-full gap-2 justify-around mb-4 list-none">
      <Player symbol="X" xIsNext={xIsNext} setName={setPlayersNames} name={playersNames.XPlayer} handleEditing={handleEditing} />
      <Player symbol="O" xIsNext={xIsNext} setName={setPlayersNames} name={playersNames.OPlayer} handleEditing={handleEditing} />
    </ol>
  );
}
