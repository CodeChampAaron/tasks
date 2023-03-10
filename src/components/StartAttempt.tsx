import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, set_attempts] = useState<number>(4);
    const [in_progress, set_in_progress] = useState<boolean>(false);

    const startQuiz = () => {
        set_attempts(attempts - 1);
        set_in_progress(true);
    };

    const stopQuiz = () => {
        set_in_progress(false);
    };
    const increaseAttempts = () => {
        set_attempts(attempts + 1);
    };
    return (
        <span>
            <Button onClick={startQuiz} disabled={in_progress || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!in_progress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempts} disabled={in_progress}>
                Mulligan
            </Button>{" "}
            {attempts}
        </span>
    );
}
