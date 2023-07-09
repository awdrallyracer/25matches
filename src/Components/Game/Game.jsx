import React from "react";
import { useState } from "react";
import s from "./Game.module.css";
import Match from "../Match/Match";
import AI from "../AI/AI";
import Result from "../Result/Result";

const Game = () => {
    const [count, setCount] = useState(25);
    const [turn, setTurn] = useState("Player" | "AI");
    const [turnClicked, setTurnClicked] = useState(false);
    const [selectedMatches, setSelectedMatches] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const choosePlayerFirst = () => {
        setTurn("Player");
        setTurnClicked(true);
    }

    const chooseAIFirst = () => {
        setTurn("AI");
        setTurnClicked(true);
    }

    const handlePlayerTurn = (numOfMatches) => {
        const updatedCount = count - numOfMatches;
        setCount(updatedCount);
        setSelectedMatches(numOfMatches);
        setTurn("AI");
        checkGameEnd(updatedCount);
    };

    const checkGameEnd = (count) => {
        if (count === 0 || count < 0) {
            setIsGameOver(true);
        }
    };

    return (
        <div>
            {!turnClicked && (
                <div className={s.playerBlock}>
                    Choose who starts the game:
                    <div>
                        <button onClick={choosePlayerFirst} className={s.playerButton}>Player</button>
                        <button onClick={chooseAIFirst} className={s.playerButton}>AI</button>
                    </div>
                </div>
            )}
            {turn === "Player" || "AI" && !isGameOver ? (
                <>
                    <div className={s.counter}>Count: {count}</div>
                    <div className={s.matchBox}>Matches</div>
                    <div className={s.insideMatchBox}>
                        {Array.from({ length: count }, (index) => (
                            <Match key={index} />
                        ))}
                    </div>
                    {turn === "Player" && (
                        <div className={s.choosingBlock}>
                            <div>Choose quantity of matches you prefer:</div>
                            <button onClick={() => handlePlayerTurn(1)} className={s.playerButton}>1</button>
                            <button onClick={() => handlePlayerTurn(2)} className={s.playerButton}>2</button>
                            <button onClick={() => handlePlayerTurn(3)} className={s.playerButton}>3</button>
                        </div>
                    )}
                    {count === 0 && (<button onClick={handlePlayerTurn(0)} className={s.playerButton}>Check result</button>)}
                    {turn === "AI" && <AI setTurn={setTurn} setCount={setCount} count={count} checkGameEnd={checkGameEnd} />}
                </>
            ) : (
                <Result count={count} />
            )}
        </div>
    );
};

export default Game;

