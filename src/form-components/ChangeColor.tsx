import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [Color, setcolor] = useState<string>("green");
    const listofcolors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setcolor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {listofcolors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={color}
                        label={color}
                        value={color}
                        checked={Color === color}
                        color={color}
                    />
                ))}
            </div>
            <div>You have chosen {Color}</div>
        </div>
    );
}
