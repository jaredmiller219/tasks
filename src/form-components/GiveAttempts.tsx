// import React, { useState } from "react";

// export function GiveAttempts(): JSX.Element {
//     return (
//         <div>
//             <h3>Give Attempts</h3>
//         </div>
//     );
// }

import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUse = () => {
        setAttemptsLeft((prevAttempts) => prevAttempts - 1);
    };

    const handleGain = () => {
        const parsedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft((prevAttempts) => prevAttempts + parsedAttempts);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
            />
            <button onClick={handleUse} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
