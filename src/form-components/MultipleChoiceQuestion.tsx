import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setchoice] = useState<string>(options[0]);

    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setchoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            {choice === expectedAnswer ? "✔️" : "❌"}
            <Form.Group controlId="favoriteColors">
                <Form.Label>Pick an answer?</Form.Label>
                <Form.Select value={choice} onChange={updateOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
