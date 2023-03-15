import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    function ifstatement(expectedAnswer: string): JSX.Element {
        if (givenAnswer === expectedAnswer) {
            return <div>✔️</div>;
        } else {
            return <div>❌</div>;
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="ChecKAnswer">
                <Form.Label>Enter Answer Below:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={givenAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            {ifstatement(expectedAnswer)}
        </div>
    );
}
