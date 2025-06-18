
import type { SquareProps } from "../Utilities/types";

export default function Square({ value, onSquareClick } : SquareProps) {
  return (
    <button className="flex items-center justify-center p-3 min-w-[100px] h-[100px] bg-gray-500 m-1 text-[4rem] font-bold " onClick={onSquareClick}>
      {value}
    </button>
  );
}