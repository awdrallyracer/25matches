import React from "react";
import s from "./Result.module.css";

const Result = ({ count }) => {
    const isEven = count % 2 === 0;
    const winner = isEven ? "Player" : "AI";

    return (
        <div>
            <div className={s.status}>Game Over</div>
            <div className={s.winner}>{winner} won </div>
        </div>);
};

export default Result;