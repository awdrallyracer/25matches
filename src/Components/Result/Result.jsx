import React from "react";
import s from "./Result.module.css";

const Result = ({ playerCount, AICount }) => {
    const isEven = playerCount % 2 === 0;
    const winner = isEven ? "Player" : "AI";

    return (
        <div>
            <div className={s.status}>Game Over</div>
            <div className={s.winner}>{winner} won </div>
            <div className={s.result}>
                <div>Player took: {playerCount} matches </div>
                <div>AI took: {AICount} matches </div>
            </div>
        </div>);
};

export default Result;