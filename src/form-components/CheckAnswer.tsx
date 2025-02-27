import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" onChange={handleChange}></input>{" "}
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
