import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ColoredBox } from "../bad-components/ColoredBox";

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
                        style={{ backgroundColor: color }}
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
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: Color }}
                >
                    {Color}
                </span>
            </div>
        </div>
    );
}
