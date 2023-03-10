import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Womens Day"
        | "Labor Day"
        | "Thanksgiving"
        | "Christmas"
        | "Halloween";
    const [holiday, setHoliday] = useState<Holiday>("Womens Day");
    const changeHolidayAlphabetically = () => {
        if (holiday === "Womens Day") {
            setHoliday("Christmas");
        }
        if (holiday === "Christmas") {
            setHoliday("Halloween");
        }
        if (holiday === "Halloween") {
            setHoliday("Labor Day");
        }
        if (holiday === "Labor Day") {
            setHoliday("Thanksgiving");
        }
        if (holiday === "Thanksgiving") {
            setHoliday("Womens Day");
        }
    };
    const changeHolidayYear = () => {
        if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        }
        if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        }
        if (holiday === "Christmas") {
            setHoliday("Womens Day");
        }
        if (holiday === "Womens Day") {
            setHoliday("Labor Day");
        }
        if (holiday === "Labor Day") {
            setHoliday("Halloween");
        }
    };

    const outputEmpji = (): JSX.Element => {
        if (holiday === "Christmas") {
            return <span>Holiday: {"\u{1F936}"}</span>;
        }
        if (holiday === "Halloween") {
            return <span>Holiday: {"\u{1F383}"}</span>;
        }

        if (holiday === "Thanksgiving") {
            return <span>Holiday: {"\u{1F983}"}</span>;
        }
        if (holiday === "Labor Day") {
            return <span>Holiday: {"\u{1F468}"}</span>;
        } else {
            return <span>Holiday: {"\u{1F469}"}</span>;
        }
    };

    return (
        <div>
            <Button onClick={changeHolidayAlphabetically}>
                Advance by Alphabet
            </Button>{" "}
            <span>{outputEmpji()}</span>
            <span>
                <Button onClick={changeHolidayYear}>Advance by Year</Button>
            </span>
        </div>
    );
}
