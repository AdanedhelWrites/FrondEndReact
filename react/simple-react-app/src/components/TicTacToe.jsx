import { useState } from "react";
import classes from "../assets/styles/Tictactoe.module.css"

export function TicTacToe() {

    return (
        <>
            <ul>
                <li>
                    <Board />
                </li>
            </ul>
        </>
    )
}

export function Board() {
    // [null,null,null,null,null,null,null,null,null]
    const [kare, setKare] = useState(Array(9).fill(null));
    const [nextPlayer, setNextPlayer] = useState(true);
    function handleClick(e) {
        const nextKare = kare.slice();
        if (nextPlayer) {
            nextKare[e] = "O"
        } else {
            nextKare[e] = "X"
        }
        setKare(nextKare);
        setNextPlayer(!nextPlayer);
    }
    return (
        <>
            <div className="board-row">
                <Square value={kare[0]} onSquareClick={() => handleClick(0)} />
                <Square value={kare[1]} onSquareClick={() => handleClick(1)} />
                <Square value={kare[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={kare[3]} onSquareClick={() => handleClick(3)} />
                <Square value={kare[4]} onSquareClick={() => handleClick(4)} />
                <Square value={kare[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={kare[6]} onSquareClick={() => handleClick(6)} />
                <Square value={kare[7]} onSquareClick={() => handleClick(7)} />
                <Square value={kare[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function Square({ value, onSquareClick }) {
    return <button className={classes.Square} onClick={onSquareClick}>{value}</button>
    // const [value, setValue] = useState(null);
    // function handleClick() {
    //     setValue("X");
    // }
}