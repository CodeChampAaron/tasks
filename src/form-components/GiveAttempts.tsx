import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setattemptsLeft] = useState<number>(3);
    const [amountRequested, setAmountRequested] = useState<number>(0);
    const attemptsGreaterThan0 = attemptsLeft > 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>requested number of attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={amountRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAmountRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setattemptsLeft(attemptsLeft + amountRequested)}
            >
                gain
            </Button>
            <Button
                disabled={!attemptsGreaterThan0}
                onClick={() => setattemptsLeft(attemptsLeft - 1)}
            >
                use
            </Button>
            {attemptsLeft}
        </div>
    );
}
