import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);

    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        setInProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>

            <div>Attempts left: {attempts}</div>
        </div>
    );
}
