import React from "react";
import "./App.css";
import manup from "./images/manup.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>man up</h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={manup}
                            alt="This is an image of someone stressed"
                        />
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Man up</li>
                            <li>pay your bills</li>
                            <li>if you mess up</li>
                            <li>house/kids get taken and wife leaves</li>
                            <li>american dream</li>
                        </ul>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>aaron oster</p>
            <p>Hello World</p>
            =======
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <CheckAnswer expectedAnswer="ManUp"></CheckAnswer>
            <hr />
            <GiveAttempts></GiveAttempts>
            <hr />
            <EditMode></EditMode>
            <hr />
            <ChangeColor></ChangeColor>
            <hr />
            <MultipleChoiceQuestion
                options={["man up", "pay your bills", "increase Credit Score"]}
                expectedAnswer={"pay your bills"}
            ></MultipleChoiceQuestion>
        </div>
    );
}

export default App;
