
export type squaresType = (string | null)[];

export type snapshotsType = (string | null)[][];

export type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};


export type BoardProps = {
  xIsNext: boolean;
  squares: squaresType;
  onPlay: (nextSquares: squaresType) => void;
  setWinner: (winner: string | null) => void;
  checkWinner?: boolean;
};