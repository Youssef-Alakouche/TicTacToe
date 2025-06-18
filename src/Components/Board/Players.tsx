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


  // const XPlayerRef = useRef<HTMLInputElement>(null);
  // const OPlayerRef = useRef<HTMLInputElement>(null);

//   function toggleEdit(player: "XPlayer" | "OPlayer") {
//     // save the current input value before toggling edit mode
//     var currentPlayer = players[player];

//     // if the player is currently editing, we can save the value
//     if (currentPlayer.isEditing) {
//       if (player === "XPlayer" && XPlayerRef.current) {
//         currentPlayer.name = XPlayerRef.current.value;
//       } else if (player === "OPlayer" && OPlayerRef.current) {
//         currentPlayer.name = OPlayerRef.current.value;
//       }
//     }

//     setPlayers((prev) => ({
//       ...prev,
//       [player]: {
//         ...prev[player],
//         isEditing: !prev[player].isEditing,
//       },
//     }));

// }
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

  return (
    <ol className="flex w-full gap-2 justify-around mb-4 list-none">
      <Player symbol="X" xIsNext={xIsNext} setName={setPlayersNames} name={playersNames.XPlayer} />
      <Player symbol="O" xIsNext={xIsNext} setName={setPlayersNames} name={playersNames.OPlayer} />
    </ol>
  );
}
