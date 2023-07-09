import React from "react";
import { useEffect } from "react";

const AI = ({ setTurn, setCount, count, checkGameEnd, setAICount, AICount }) => {
    useEffect(() => {
        const chooseMatches = () => {
            const aiCount = Math.floor(Math.random() * 3) + 1;
            const updatedCount = count - aiCount;
            if (updatedCount >= 0) {
                setTurn("Player");
                setTimeout(() => {
                    setCount(updatedCount);
                    checkGameEnd(updatedCount);
                    setAICount(AICount + aiCount);
                }, 1000);
            }
        };
        chooseMatches();
    }, [count, setCount, setTurn, checkGameEnd, setAICount, AICount]);
    return <div></div>;
};

export default AI;