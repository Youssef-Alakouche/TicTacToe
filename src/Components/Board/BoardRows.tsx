
import Square from "../Square";

type BoardRowsProps = {
  squares: (string | null)[];
  handleClick: (i: number) => void;
    children?: React.ReactNode;
};

export default function BoardRows({children, squares, handleClick} : BoardRowsProps) {

return (<div className="relative"> 

{children}
{[0, 1, 2].map(row => (
    <div className="w-full flex justify-center" key={row}>
        {[0, 1, 2].map(col => (
            <Square key={row * 3 + col} value={squares[row * 3 + col]} onSquareClick={() => handleClick(row * 3 + col)} />
        ))}
    </div>
))}
</div>
);

}