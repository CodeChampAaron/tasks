import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setValue] = useState<boolean>(false);

    return (
        <span>
            <Button onClick={() => setValue(!value)}>Reveal Answer</Button>{" "}
            {value && 42}
        </span>
    );
}
