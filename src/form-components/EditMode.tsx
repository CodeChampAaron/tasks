import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface EditBoy {
    student: boolean;
    userName: string;
    editMode: boolean;
}
export function EditMode(): JSX.Element {
    const [student, setstudent] = useState<boolean>(true);
    const [userName, setuserName] = useState<string>("Your Name");
    const [editmode, seteditmode] = useState<boolean>(false);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setuserName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setstudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type={"switch"}
                id="editMode"
                label=""
                checked={editmode}
                onChange={updateEditMode}
            />
            <div>
                {" "}
                {student
                    ? userName + " is a student"
                    : userName + " is not a student"}
            </div>
            {editmode ? (
                <Form.Group controlId="EditModeTextbox">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={userName} onChange={updateUserName} />
                </Form.Group>
            ) : null}
            <div>
                {editmode ? (
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="student"
                        checked={student}
                        onChange={updateStudent}
                    />
                ) : null}
            </div>
        </div>
    );
}
