
type MovesProps = {
    snapshots: (string | null)[][];
    jumpTo: (nextMove: number) => void;
};

export default function Moves({snapshots, jumpTo}: MovesProps) {
    const moves = snapshots.map((_, move) => {
        let description;
        if (move > 0) {
            description = "-> move #" + move;
        } else {
            description = "-> game start";
        }
        return (
            <li key={move} >
                <button className="text-lg font-semibold capitalize" onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className=" xl:absolute top-50% md:right-[5%] xl:right-[10%] 2xl:right-[20%] h-[200px] p-4">
            <ol>{moves}</ol>
        </div>
    );

}