import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p> {/* Display the number of attempts */}
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
