import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setDie1] = useState<number>(2);
    const [die2, setDie2] = useState<number>(6);
    const [winMessage, setWinMessage] = useState("");
    const [bothDiceRolled, setBothDiceRolled] = useState(false);

    const rollDie1 = () => {
        const newDie1 = d6();
        setDie1(newDie1);
        setBothDiceRolled(false); // Reset the bothDiceRolled state
    };

    const rollDie2 = () => {
        const newDie2 = d6();
        setDie2(newDie2);
        if (die1 && newDie2 === die1 && die1 !== 1) {
            setWinMessage("Win");
        } else if (die1 && newDie2 === 1 && die1 === 1) {
            setWinMessage("Lose");
        } else {
            setWinMessage("");
        }
        setBothDiceRolled(true); // Set the bothDiceRolled state to true
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "200px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Button onClick={rollDie1}>Roll Left</Button>
                    <span data-testid="left-die">{die1}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Button onClick={rollDie2}>Roll Right</Button>
                    <span data-testid="right-die">{die2}</span>
                </div>
            </div>
            {bothDiceRolled && winMessage && <p>{winMessage}</p>}
        </div>
    );
}
