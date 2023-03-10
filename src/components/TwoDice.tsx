import { spawn } from "child_process";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1_value, setdie1_value] = useState<number>(6);
    const [die2_value, setdie2_value] = useState<number>(2);
    const logic = (): JSX.Element => {
        if (die1_value === 1 && die2_value === 1) {
            return <span>Lose</span>;
        } else if (die1_value !== die2_value) {
            return <span>Dickhead boi</span>;
        } else {
            return <span>Win</span>;
        }
    };

    return (
        <div>
            <span>
                <Button onClick={() => setdie1_value(d6())}>Roll Left</Button>
            </span>
            <span data-testid="left-die">{die1_value}</span>
            <span data-testid="right-die">{die2_value}</span>
            <span>{logic()}</span>
            <span>
                <Button onClick={() => setdie2_value(d6())}>Roll Right</Button>
            </span>
        </div>
    );
}
