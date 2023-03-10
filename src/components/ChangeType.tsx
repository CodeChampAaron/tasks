import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    const funct = () => {
        if (value === "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    };
    return (
        <span>
            <Button onClick={funct}>Change Type</Button>
            {value === "multiple_choice_question" ? (
                <span> Multiple Choice </span>
            ) : (
                <span>Short Answer</span>
            )}{" "}
        </span>
    );
}
