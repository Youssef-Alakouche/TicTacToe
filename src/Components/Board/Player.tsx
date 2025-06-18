import { useRef, useState } from "react";

// In your types file
export type PlayersState = {
  XPlayer: string;
  OPlayer: string;
};

// In component
type PlayerProps = {
  symbol: "X" | "O";
  name: string;
  setName: React.Dispatch<React.SetStateAction<PlayersState>>;
  xIsNext: boolean;
};


function Player({ symbol, setName, xIsNext }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);

  const playerNameRef = useRef<HTMLInputElement>(null);

  function toggleEdit() {
    if (isEditing) {
      // Save the name when toggling off edit mode
      const newName = playerNameRef.current?.value.trim() || "";
      if (symbol === "X") {
        setName((prev) => ({
          ...prev,
          XPlayer: newName,
        }));
      }
      if (symbol === "O") {
        setName((prev) => ({
          ...prev,
          OPlayer: newName,
        }));
      }
    }

    setIsEditing((prev) => !prev);
  }

  return (
    <li
      className={`
                ${!xIsNext && symbol == "X" ? "border-transparent" : ""} 
                ${xIsNext && symbol == "O" ? "border-transparent" : ""}
                border-2 p-1 w-2/5  flex justify-between items-center`}
    >
      <span className="font-semibold w-2/3 flex justify-between">
        <input
          type="text"
          className="w-4/5 border-none outline-none"
          placeholder={`Player ${symbol}`}
          ref={playerNameRef}
          disabled={!isEditing}
        />
        <span>{symbol}</span>
      </span>
      <span
        // onClick={() => toggleEdit(`${player}Player`)}
        onClick={toggleEdit}
        className="w-1/3 text-center"
      >
        {isEditing ? "Save" : "Edit"}
      </span>
    </li>
  );
}

export default Player;
