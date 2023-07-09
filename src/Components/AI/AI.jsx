import React from "react";
import { useEffect } from "react";

const AI = ({ setTurn, setCount, count, checkGameEnd }) => {
    useEffect(() => {
        const chooseMatches = () => {
            const aiCount = Math.floor(Math.random() * 3) + 1;
            const updatedCount = count - aiCount;
            if (updatedCount >= 0) {
                setTurn("Player");
                setTimeout(() => {
                    setCount(updatedCount);
                    checkGameEnd(updatedCount);
                }, 1000);
            }
        };
        chooseMatches();
    }, [count, setCount, setTurn, checkGameEnd]);

    return <div></div>;
};

export default AI;