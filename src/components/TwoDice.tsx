import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const loseMessage =
        leftDie === 1 && rightDie === 1 ? <span>You lose!</span> : null;
    const winMessage = leftDie === rightDie ? <span>You win!</span> : null;

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <Button onClick={rollLeft} data-testid="left-button">
                    Roll Left
                </Button>
            </div>
            <div>
                <span data-testid="right-die">{rightDie}</span>
                <Button onClick={rollRight} data-testid="right-button">
                    Roll Right
                </Button>
            </div>
            {loseMessage}
            {winMessage}
        </div>
    );
}
